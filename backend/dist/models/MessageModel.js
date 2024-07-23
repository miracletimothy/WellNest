"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    text: { type: String, required: true },
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    chatId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});
const Message = (0, mongoose_1.model)("Message", messageSchema);
exports.default = Message;
//# sourceMappingURL=MessageModel.js.map