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
exports.deleteAppointment = exports.getAppointmentById = exports.getAppointments = exports.createAppointment = void 0;
const AppointmentModel_1 = __importDefault(require("../../models/AppointmentModel"));
// Create a new appointment
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description, date, time, serviceId } = req.body;
    try {
        const newAppointment = new AppointmentModel_1.default({
            description,
            date,
            time,
            serviceId,
        });
        yield newAppointment.save();
        res.status(201).json(newAppointment);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating appointment" });
    }
});
exports.createAppointment = createAppointment;
// Get all appointments
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield AppointmentModel_1.default.find().sort({ date: 1, time: 1 });
        res.status(200).json(appointments);
    }
    catch (err) {
        res
            .status(500)
            .json({ error: "Failed to fetch appointments", details: err });
    }
});
exports.getAppointments = getAppointments;
// Get a specific appointment by ID
const getAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const appointment = yield AppointmentModel_1.default.findById(id);
        if (!appointment) {
            return res.status(404).json({ error: "Appointment not found" });
        }
        res.status(200).json(appointment);
    }
    catch (err) {
        res
            .status(500)
            .json({ error: "Failed to fetch appointment", details: err });
    }
});
exports.getAppointmentById = getAppointmentById;
// Delete an appointment
const deleteAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedAppointment = yield AppointmentModel_1.default.findByIdAndDelete(id);
        if (!deletedAppointment) {
            return res.status(404).json({ error: "Appointment not found" });
        }
        res.status(200).json({ message: "Appointment deleted successfully" });
    }
    catch (err) {
        res
            .status(500)
            .json({ error: "Failed to delete appointment", details: err });
    }
});
exports.deleteAppointment = deleteAppointment;
//# sourceMappingURL=AppointmentController.js.map