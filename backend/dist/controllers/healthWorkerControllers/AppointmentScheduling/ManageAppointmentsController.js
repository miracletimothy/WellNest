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
exports.runMarkAsMissedJob = exports.markAsMissed = exports.markAsServed = exports.getApprovedAppointments = void 0;
const AppointmentModel_1 = __importDefault(require("../../../models/AppointmentModel"));
const getApprovedAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield AppointmentModel_1.default.find({
            approvalStatus: "approved",
            completionStatus: "awaiting",
        }).sort({ date: -1 });
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching appointments", error });
    }
});
exports.getApprovedAppointments = getApprovedAppointments;
const markAsServed = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const appointment = yield AppointmentModel_1.default.findByIdAndUpdate(id, { completionStatus: "complete" }, { new: true });
        if (!appointment) {
            res.status(404).json({ message: "Appointment not found" });
            return;
        }
        res
            .status(200)
            .json({ message: "Appointment marked as served", appointment });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Error marking appointment as served", error });
    }
});
exports.markAsServed = markAsServed;
const markAsMissed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const now = new Date();
        const result = yield AppointmentModel_1.default.updateMany({
            approvalStatus: "approved",
            completionStatus: "awaiting",
            date: { $lt: now },
        }, { completionStatus: "missed" });
        console.log("Appointments marked as missed:", result);
    }
    catch (error) {
        console.error("Error marking appointments as missed", error);
    }
});
exports.markAsMissed = markAsMissed;
const runMarkAsMissedJob = () => {
    setInterval(() => {
        (0, exports.markAsMissed)().catch((error) => {
            console.error("Error in markAsMissedJob:", error);
        });
    }, 60000);
};
exports.runMarkAsMissedJob = runMarkAsMissedJob;
//# sourceMappingURL=ManageAppointmentsController.js.map