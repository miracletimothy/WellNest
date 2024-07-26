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
exports.createMessage = exports.getMessagesByRole = exports.getMessages = void 0;
const MessageModel_1 = __importDefault(require("../../models/Chat/MessageModel"));
const getMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield MessageModel_1.default.find();
        res.json(messages);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getMessages = getMessages;
const getMessagesByRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield MessageModel_1.default.find({ role: req.params.role });
        res.json(messages);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.getMessagesByRole = getMessagesByRole;
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = new MessageModel_1.default({
        text: req.body.text,
        role: req.body.role,
    });
    try {
        const newMessage = yield message.save();
        res.status(201).json(newMessage);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.createMessage = createMessage;
//# sourceMappingURL=MessageController.js.map