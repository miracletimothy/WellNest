"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const userModel_1 = __importDefault(require("../models/userModel"));
const TwoFactorModel_1 = __importDefault(require("../models/TwoFactorModel"));
const emailService_1 = require("../services/emailService");
dotenv_1.default.config();
const register = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { email, firstName, lastName, password, role } = req.body;
    try {
      let user = yield userModel_1.default.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }
      const code = crypto_1.default.randomBytes(3).toString("hex");
      const salt = yield bcryptjs_1.default.genSalt(10);
      const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
      const twoFactorRecord = new TwoFactorModel_1.default({
        email,
        firstName,
        lastName,
        password: hashedPassword,
        role,
        code,
        expiresAt: new Date(Date.now() + 15 * 60 * 1000),
      });
      yield twoFactorRecord.save();
      yield (0, emailService_1.sendVerificationEmail)(email, firstName, code);
      res.json({ msg: "Verification code sent to your email" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });
exports.register = register;
const login = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
      let user = yield userModel_1.default.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const isMatch = yield bcryptjs_1.default.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
      const payload = {
        user: {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          isVerified: user.isVerified,
          profilePic: user.profilePic,
        },
      };
      jsonwebtoken_1.default.sign(
        payload,
        "miracle",
        { expiresIn: "48h" },
        (err, token) => {
          if (err) throw err;
          res.json({ token, user: payload.user });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });
exports.login = login;
//# sourceMappingURL=authController.js.map
