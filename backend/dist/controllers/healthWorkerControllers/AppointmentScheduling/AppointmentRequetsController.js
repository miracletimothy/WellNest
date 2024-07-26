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
exports.dismissAppointment = exports.approveAppointment = exports.getAppointmentRequests = void 0;
const AppointmentModel_1 = __importDefault(require("../../../models/AppointmentModel"));
const getAppointmentRequests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requests = yield AppointmentModel_1.default.find({ approvalStatus: "not approved" });
        res.json(requests);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching appointment requests" });
    }
});
exports.getAppointmentRequests = getAppointmentRequests;
const approveAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield AppointmentModel_1.default.findByIdAndUpdate(id, { approvalStatus: "approved" });
        res.status(200).json({ message: "Appointment approved" });
    }
    catch (error) {
        res.status(500).json({ message: "Error approving appointment" });
    }
});
exports.approveAppointment = approveAppointment;
const dismissAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { message } = req.body;
        yield AppointmentModel_1.default.findByIdAndUpdate(id, {
            approvalStatus: "canceled",
            message,
        });
        res.status(200).json({ message: "Appointment dismissed" });
    }
    catch (error) {
        res.status(500).json({ message: "Error dismissing appointment" });
    }
});
exports.dismissAppointment = dismissAppointment;
//# sourceMappingURL=AppointmentRequetsController.js.map