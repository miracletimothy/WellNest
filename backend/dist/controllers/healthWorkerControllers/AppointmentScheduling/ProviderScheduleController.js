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
exports.addSchedule = exports.getSchedules = void 0;
const ManageProviderScheduleModel_1 = __importDefault(require("../../../models/AppointmentScheduling/ManageProviderScheduleModel"));
const getSchedules = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const schedules = yield ManageProviderScheduleModel_1.default.find();
        res.json(schedules);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching schedules" });
    }
});
exports.getSchedules = getSchedules;
const addSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, startTime, endTime, activity } = req.body;
    try {
        const newSchedule = new ManageProviderScheduleModel_1.default({ date, startTime, endTime, activity });
        yield newSchedule.save();
        res.status(201).json(newSchedule);
    }
    catch (error) {
        res.status(500).json({ message: "Error adding schedule" });
    }
});
exports.addSchedule = addSchedule;
//# sourceMappingURL=ProviderScheduleController.js.map