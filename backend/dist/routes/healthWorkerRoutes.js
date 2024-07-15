"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const profileController_1 = require("../controllers/healthWorkerControllers/profileController");
const categoryController_1 = require("../controllers/healthWorkerControllers/content/categoryController");
const router = express_1.default.Router();
router.get('/profile', authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(['health_worker']), profileController_1.getProfile);
router.get('/content-categories', authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(['health_worker']), categoryController_1.getCategories);
exports.default = router;
//# sourceMappingURL=healthWorkerRoutes.js.map