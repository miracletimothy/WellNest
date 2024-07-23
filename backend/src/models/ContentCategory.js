"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ContentCategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
var ContentCategory = mongoose_1.default.model('ContentCategory', ContentCategorySchema);
exports.default = ContentCategory;
