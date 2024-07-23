"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MessageController_1 = require("../../controllers/Chat/MessageController");
const router = express_1.default.Router();
router.get("/", MessageController_1.getMessages);
router.get("/role/:role", MessageController_1.getMessagesByRole);
router.post("/create", MessageController_1.createMessage);
exports.default = router;
//# sourceMappingURL=MessageRoutes.js.map