"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TwoFactorSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    password: { type: String, required: true },
    role: { type: String, required: true },
    code: { type: String, required: true },
    expiresAt: {
        type: Date,
        required: true,
        default: Date.now,
        index: { expires: '15m' },
    },
});
exports.default = (0, mongoose_1.model)('TwoFactor', TwoFactorSchema);
//# sourceMappingURL=TwoFactorModel.js.map