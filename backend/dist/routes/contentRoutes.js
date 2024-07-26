"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contentController_1 = require("../controllers/healthWorkerControllers/content/contentController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, `${uniqueSuffix}${path_1.default.extname(file.originalname)}`);
    },
});
const upload = (0, multer_1.default)({ storage });
router.post("/create", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), upload.single("file"), contentController_1.createContent);
router.get("/", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), contentController_1.getContentByCategoryAndType);
exports.default = router;
//# sourceMappingURL=contentRoutes.js.map