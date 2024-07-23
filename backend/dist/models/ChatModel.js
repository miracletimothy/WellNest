"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const chatSchema = new mongoose_1.Schema({
    participants: [{ type: String, required: true }],
});
const Chat = (0, mongoose_1.model)("Chat", chatSchema);
exports.default = Chat;
//# sourceMappingURL=ChatModel.js.map