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
exports.getContentByCategoryAndType = exports.createContent = void 0;
const ContentModel_1 = __importDefault(require("../../../models/ContentModel"));
const createContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type, title, description, tags, links, userId } = req.body;
    let fileUrl = null;
    if (req.file) {
        fileUrl = req.file.path; // This assumes you're using a middleware like multer for file handling
    }
    try {
        const newContent = new ContentModel_1.default({
            type,
            title,
            description,
            tags: JSON.parse(tags),
            links: JSON.parse(links),
            file: fileUrl,
            userId,
        });
        const savedContent = yield newContent.save();
        res.status(201).json(savedContent);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating content' });
    }
});
exports.createContent = createContent;
const getContentByCategoryAndType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category, type } = req.query;
        if (!category || typeof category !== 'string') {
            return res
                .status(400)
                .json({ message: 'Category is required and must be a string' });
        }
        const categoryTags = category.split('-').map(tag => tag.trim());
        console.log('categoryTags:', categoryTags);
        // const content = await Content.find({ tags: { $in: categoryTags }, type });
        // console.log('category:', category, '\n', 'content:', content, '\n');
        const allContent = yield ContentModel_1.default.find({ type });
        const filterContent = allContent.filter(content => {
            const contentTags = content.tags.flatMap(tag => tag.split(' ').map(t => t.toLowerCase()));
            return categoryTags.some(categoryTag => contentTags.includes(categoryTag));
        });
        console.log('category:', category, '\n', 'content:', filterContent, '\n');
        res.status(200).json(filterContent);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});
exports.getContentByCategoryAndType = getContentByCategoryAndType;
//# sourceMappingURL=contentController.js.map