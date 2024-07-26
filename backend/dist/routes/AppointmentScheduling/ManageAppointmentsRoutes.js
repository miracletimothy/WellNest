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
const ManageAppointmentsController_1 = require("../../controllers/healthWorkerControllers/AppointmentScheduling/ManageAppointmentsController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const router = express_1.default.Router();
router.get("/get/approved", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), ManageAppointmentsController_1.getApprovedAppointments);
router.post("/serve/:id/serve", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), ManageAppointmentsController_1.markAsServed);
router.post("/miss/:id/miss", authMiddleware_1.authMiddleware, (0, authMiddleware_1.authorizeRole)(["health_worker"]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, ManageAppointmentsController_1.markAsMissed)();
        res
            .status(200)
            .json({ message: "Appointments checked for missed status" });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Error marking appointments as missed", error });
    }
}));
exports.default = router;
//# sourceMappingURL=ManageAppointmentsRoutes.js.map