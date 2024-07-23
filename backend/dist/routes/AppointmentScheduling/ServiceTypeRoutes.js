"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ServiceTypeController_1 = require("../../controllers/healthWorkerControllers/AppointmentScheduling/ServiceTypeController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.get("/get/service-types", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), ServiceTypeController_1.getAllServiceTypes);
router.post("/create/service-types", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), ServiceTypeController_1.createServiceType);
router.put("/update/service-types/:id", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), ServiceTypeController_1.updateServiceType);
router.delete("/delete/service-types/:id", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), ServiceTypeController_1.deleteServiceType);
exports.default = router;
//# sourceMappingURL=ServiceTypeRoutes.js.map