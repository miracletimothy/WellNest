"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/config/multerConfig.ts
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// Set storage engine
const storage = multer_1.default.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path_1.default.extname(file.originalname));
    },
});
// Init upload
const upload = (0, multer_1.default)({
    storage: storage,
    limits: { fileSize: 1000000 }, // 1MB file size limit
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
}).single("file");
// Check file type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif|pdf|docx|mp4|mp3/;
    // Check ext
    const extname = filetypes.test(path_1.default.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    }
    else {
        cb(new Error("Error: Files only!"));
    }
}
exports.default = upload;
//# sourceMappingURL=MulterConfig.js.map