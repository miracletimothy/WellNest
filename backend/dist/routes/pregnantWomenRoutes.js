"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const profileController_1 = require("../controllers/pregnantWomenControllers/profileController");
const router = express_1.default.Router();
router.get('/profile', authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(['pregnant_woman']), profileController_1.getProfile);
exports.default = router;
//# sourceMappingURL=pregnantWomenRoutes.js.map