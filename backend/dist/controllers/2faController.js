"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCode = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
const TwoFactorModel_1 = __importDefault(require("../models/TwoFactorModel"));
const emailService_1 = require("../services/emailService");
const verifyCode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, code } = req.body;
    try {
        // Find the verification record
        const record = yield TwoFactorModel_1.default.findOne({ email, code });
        if (!record) {
            return res.status(400).json({ msg: 'Invalid or expired code' });
        }
        // Create a new user based on the verification record
        const newUser = new UserModel_1.default({
            email: record.email,
            firstName: record.firstName, // Assuming you have firstName in the TwoFactor model
            lastName: record.lastName, // Assuming you have lastName in the TwoFactor model
            password: record.password,
            role: record.role,
            isVerified: true,
        });
        yield newUser.save();
        // Delete the verification record
        yield TwoFactorModel_1.default.deleteOne({ _id: record._id });
        // Fetch user to get the first name
        const user = yield UserModel_1.default.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: 'User not found after registration' });
        }
        // Send welcome email
        yield (0, emailService_1.sendWelcomeEmail)(email, user.firstName);
        res.json({ msg: 'Email verified and user registered successfully' });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
exports.verifyCode = verifyCode;
//# sourceMappingURL=2faController.js.map