"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProviderScheduleController_1 = require("../../controllers/healthWorkerControllers/AppointmentScheduling/ProviderScheduleController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.get("/get/provider-schedules", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), ProviderScheduleController_1.getSchedules);
router.post("/create/provider-schedules", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), ProviderScheduleController_1.addSchedule);
exports.default = router;
//# sourceMappingURL=ManageProviderScheduleRoutes.js.map