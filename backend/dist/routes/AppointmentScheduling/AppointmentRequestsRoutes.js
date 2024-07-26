"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AppointmentRequetsController_1 = require("../../controllers/healthWorkerControllers/AppointmentScheduling/AppointmentRequetsController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const router = express_1.default.Router();
router.get("/get/appointment-requests", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), AppointmentRequetsController_1.getAppointmentRequests);
router.post("/approve/appointment-request/:id/approve", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), AppointmentRequetsController_1.approveAppointment);
router.post("/dismiss/appointment-request/:id/dismiss", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), AppointmentRequetsController_1.dismissAppointment);
exports.default = router;
//# sourceMappingURL=AppointmentRequestsRoutes.js.map