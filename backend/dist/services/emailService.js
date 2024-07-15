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
exports.sendVerificationEmail = exports.sendWelcomeEmail = exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    service: 'Gmail',
    auth: {
        user: 'cmhmcs@gmail.com',
        pass: 'ydnc qxvn oago fftx',
    },
});
// Email templates
const templates = {
    welcome: (username) => `
    <html>
      <body>
        <h3>Welcome, ${username}!</h3>
        <p>Your account has been successfully created.</p>
        <p>Thank you for joining us!</p>
      </body>
    </html>
  `,
    verification: (username, code) => `
    <html>
      <body>
        <h3>Welcome, ${username}!</h3>
        <p>Your account is almost ready. Please use the following verification code to complete your registration:</p>
        <code>${code}</code>
      </body>
    </html>
  `,
    // Add more templates as needed
};
const sendEmail = (to, subject, html) => __awaiter(void 0, void 0, void 0, function* () {
    const mailOptions = {
        from: 'cmhmcs@gmail.com',
        to,
        subject,
        html,
    };
    try {
        const info = yield transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    }
    catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
});
exports.sendEmail = sendEmail;
const sendWelcomeEmail = (to, username) => __awaiter(void 0, void 0, void 0, function* () {
    const html = templates.welcome(username);
    yield (0, exports.sendEmail)(to, 'Welcome to Our App!', html);
});
exports.sendWelcomeEmail = sendWelcomeEmail;
const sendVerificationEmail = (to, username, code) => __awaiter(void 0, void 0, void 0, function* () {
    const html = templates.verification(username, code);
    yield (0, exports.sendEmail)(to, 'Verify Your Account', html);
});
exports.sendVerificationEmail = sendVerificationEmail;
//# sourceMappingURL=emailService.js.map