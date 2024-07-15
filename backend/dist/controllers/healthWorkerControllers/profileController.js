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
exports.getProfile = void 0;
const UserModel_1 = __importDefault(require("../../models/UserModel"));
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'health_worker') {
            return res.status(403).json({ msg: 'Unauthorized' });
        }
        const healthWorkerProfile = yield UserModel_1.default.findOne({ _id: (_b = req.user) === null || _b === void 0 ? void 0 : _b.id });
        if (!healthWorkerProfile) {
            return res.status(404).json({ msg: 'Profile not found' });
        }
        res.json(healthWorkerProfile);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
exports.getProfile = getProfile;
//# sourceMappingURL=profileController.js.map