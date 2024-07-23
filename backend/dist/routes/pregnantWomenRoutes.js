"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const profileController_1 = require("../controllers/pregnantWomenControllers/profileController");
const AppointmentController_1 = require("../controllers/pregnantWomenControllers/AppointmentController");
const ServiceTypeController_1 = require("../controllers/healthWorkerControllers/AppointmentScheduling/ServiceTypeController");
const router = express_1.default.Router();
// Profile
router.get("/profile", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["pregnant_woman"]), profileController_1.getProfile);
// GET All ServiceTypes
router.get("/appointments/get/service-types", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["pregnant_woman"]), ServiceTypeController_1.getAllServiceTypes);
// Appointments
router.post("/appointments/create", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["pregnant_woman"]), AppointmentController_1.createAppointment);
router.get("/appointments/view", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["pregnant_woman"]), AppointmentController_1.getAppointments);
router.get("/appointments/view/:id", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["pregnant_woman"]), AppointmentController_1.getAppointmentById);
router.delete("/appointments/delete/:id", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["pregnant_woman"]), AppointmentController_1.deleteAppointment);
exports.default = router;
//# sourceMappingURL=pregnantWomenRoutes.js.map