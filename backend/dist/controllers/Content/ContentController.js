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
exports.createContent = void 0;
const ContentModel_1 = __importDefault(require("../../models/Content/ContentModel"));
const MulterConfig_1 = __importDefault(require("../../config/MulterConfig"));
const createContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, MulterConfig_1.default)(req, res, (err) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        const { title, description, tags, links, type } = req.body;
        const filePath = req.file ? `/uploads/${req.file.filename}` : null;
        try {
            const newContent = new ContentModel_1.default({
                title,
                description,
                tags,
                links,
                file: filePath,
                fileType: req.file ? req.file.mimetype : links.length ? "link" : "",
                type,
            });
            yield newContent.save();
            res.status(201).json(newContent);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }));
});
exports.createContent = createContent;
//# sourceMappingURL=ContentController.js.map