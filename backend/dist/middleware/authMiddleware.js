"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRole = exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
    console.log('Token:', token);
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        console.log('Decoded Token:', decoded);
        req.user = decoded.user;
        console.log('User Role:', req.user.role);
        next();
    }
    catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
        console.error('Token verification failed:', err);
    }
};
exports.authMiddleware = authMiddleware;
const authorizeRole = (roles) => {
    return (req, res, next) => {
        var _a;
        if (!roles.includes((_a = req.user) === null || _a === void 0 ? void 0 : _a.role)) {
            return res.status(403).json({ msg: 'Unauthorized' });
        }
        next();
    };
};
exports.authorizeRole = authorizeRole;
//# sourceMappingURL=authMiddleware.js.map