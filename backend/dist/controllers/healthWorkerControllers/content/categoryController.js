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
exports.getCategories = void 0;
const ContentCategory_1 = __importDefault(require("../../../models/ContentCategory"));
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(403).json({ msg: 'Unauthorized' });
        }
        const categories = yield ContentCategory_1.default.find();
        if (!categories) {
            return res.status(404).json({ msg: 'categories not found' });
        }
        res.json(categories);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
exports.getCategories = getCategories;
//# sourceMappingURL=categoryController.js.map