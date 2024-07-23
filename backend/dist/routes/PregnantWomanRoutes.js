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
const express_1 = __importDefault(require("express"));
const PregnantWoman_1 = __importDefault(require("../models/PregnantWoman"));
const FormModel_1 = __importDefault(require("../models/FormModel"));
const router = express_1.default.Router();
// Create a new profile with empty forms
router.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, age, contact } = req.body;
        const newWoman = new PregnantWoman_1.default({ name, age, contact, forms: [] });
        const savedWoman = yield newWoman.save();
        const formTypes = [
            "Form1",
            "Form2",
            "Form3",
            "Form4",
            "Form5",
            "Form6",
            "Form7",
            "Form8",
            "Form9",
            "Form10",
            "Form11",
            "Form12",
            "Form13",
            "Form14",
            "Form15",
            "Form16",
            "Form17",
            "Form18",
        ];
        const formPromises = formTypes.map((formType) => {
            const newForm = new FormModel_1.default({ formType, woman: savedWoman._id });
            return newForm.save();
        });
        const forms = yield Promise.all(formPromises);
        savedWoman.forms = forms.map((form) => form._id);
        yield savedWoman.save();
        res.status(201).json(savedWoman);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating profile", error });
    }
}));
// Get all profiles
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const women = yield PregnantWoman_1.default.find().populate("forms");
        res.status(200).json(women);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching profiles", error });
    }
}));
exports.default = router;
//# sourceMappingURL=PregnantWomanRoutes.js.map