"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/contentRoutes.ts
const express_1 = require("express");
const ContentController_1 = require("../../controllers/Content/ContentController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post("/upload-content", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), ContentController_1.createContent);
exports.default = router;
//# sourceMappingURL=ContentRoutes.js.map