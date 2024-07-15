"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const _2faController_1 = require("../controllers/2faController");
const router = (0, express_1.Router)();
// @route   POST api/auth/login
// @desc    Login user
// @access  Public
router.post('/register', authController_1.register);
router.post('/verify', _2faController_1.verifyCode);
router.post('/login', authController_1.login);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map