import { Request, Response } from "express";
import User from "../models/userModel";
import TwoFactor from "../models/TwoFactorModel";
import { sendWelcomeEmail } from "../services/emailService";

export const verifyCode = async (req: Request, res: Response) => {
  const { email, code } = req.body;

  try {
    // Find the verification record
    const record = await TwoFactor.findOne({ email, code });

    if (!record) {
      return res.status(400).json({ msg: "Invalid or expired code" });
    }

    // Create a new user based on the verification record
    const newUser = new User({
      email: record.email,
      firstName: record.firstName, // Assuming you have firstName in the TwoFactor model
      lastName: record.lastName, // Assuming you have lastName in the TwoFactor model
      password: record.password,
      role: record.role,
      isVerified: true,
    });

    await newUser.save();

    // Delete the verification record
    await TwoFactor.deleteOne({ _id: record._id });

    // Fetch user to get the first name
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ msg: "User not found after registration" });
    }

    // Send welcome email
    await sendWelcomeEmail(email, user.firstName);

    res.json({ msg: "Email verified and user registered successfully" });
  } catch (err) {
    console.error((err as Error).message);
    res.status(500).send("Server error");
  }
};
