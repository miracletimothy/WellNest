"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["pregnant_woman", "health_worker"],
        required: true,
    },
    time: {
        type: Date,
        default: Date.now,
    },
});
const Message = (0, mongoose_1.model)("Message", messageSchema);
exports.default = Message;
//# sourceMappingURL=MessageModel.js.map