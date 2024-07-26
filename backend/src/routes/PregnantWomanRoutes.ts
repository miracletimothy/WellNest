import express, { Request, Response } from "express";
import PregnantWoman from "../models/PregnantWoman";
import Form from "../models/FormModel";
import mongoose from "mongoose";

const router = express.Router();

router.post("/create", async (req: Request, res: Response) => {
  try {
    const { name, age, contact } = req.body;
    const newWoman = new PregnantWoman({ name, age, contact, forms: [] });
    const savedWoman = await newWoman.save();

    const formTypes = [
      "Form1",
      "Form2",
      "Form3",
      "Form4",
      "Form5",
      "Form6",
      "Form7",
      "Form8",
      "Form9",
      "Form10",
      "Form11",
      "Form12",
      "Form13",
      "Form14",
      "Form15",
      "Form16",
      "Form17",
      "Form18",
    ];

    const formPromises = formTypes.map((formType) => {
      const newForm = new Form({ formType, woman: savedWoman._id });
      return newForm.save();
    });

    const forms = await Promise.all(formPromises);
    savedWoman.forms = forms.map((form) => form._id as mongoose.Types.ObjectId);
    await savedWoman.save();

    res.status(201).json(savedWoman);
  } catch (error) {
    res.status(500).json({ message: "Error creating profile", error });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const women = await PregnantWoman.find().populate("forms");
    res.status(200).json(women);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profiles", error });
  }
});

export default router;
