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
const express_1 = require("express");
const ChatModel_1 = __importDefault(require("../models/ChatModel"));
const ChatModel_2 = __importDefault(require("../models/ChatModel"));
const router = (0, express_1.Router)();
// Get all chats
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chats = yield ChatModel_1.default.find();
        res.json(chats);
    }
    catch (err) {
        res.status(500).json({ message: "Failed to fetch chats" });
    }
}));
// Get messages for a specific chat
router.get("/:chatId/messages", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { chatId } = req.params;
    try {
        const messages = yield ChatModel_2.default.find({ chatId });
        res.json(messages);
    }
    catch (err) {
        res.status(500).json({ message: "Failed to fetch messages" });
    }
}));
exports.default = router;
//# sourceMappingURL=ChatRoutes.js.map