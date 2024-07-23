"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./utils/db"));
const path_1 = __importDefault(require("path"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const pregnantWomenRoutes_1 = __importDefault(require("./routes/pregnantWomenRoutes"));
const healthWorkerRoutes_1 = __importDefault(require("./routes/healthWorkerRoutes"));
const contentRoutes_1 = __importDefault(require("./routes/contentRoutes"));
// APPOINTMENT SCHEDULING
const ServiceTypeRoutes_1 = __importDefault(require("./routes/AppointmentScheduling/ServiceTypeRoutes"));
const ManageProviderScheduleRoutes_1 = __importDefault(require("./routes/AppointmentScheduling/ManageProviderScheduleRoutes"));
const AppointmentRequestsRoutes_1 = __importDefault(require("./routes/AppointmentScheduling/AppointmentRequestsRoutes"));
const ManageAppointmentsRoutes_1 = __importDefault(require("./routes/AppointmentScheduling/ManageAppointmentsRoutes"));
// CHAT
const MessageRoutes_1 = __importDefault(require("./routes/Chat/MessageRoutes"));
// CONTENT
const ContentRoutes_1 = __importDefault(require("./routes/Content/ContentRoutes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
(0, db_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*", // Consider using a specific origin for better security in production
    credentials: true, // Allow credentials (cookies, authorization headers)
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
    allowedHeaders: ["Content-Type", "Authorization", "x-auth-token"], // Include x-auth-token here
}));
// Default route
app.get("/", (req, res) => {
    res.status(200).json({ message: "CMHMCS Server is Running!" });
});
// User routes
app.use("/api/auth", authRoutes_1.default);
app.use("/api/pw", pregnantWomenRoutes_1.default);
app.use("/api/hw", healthWorkerRoutes_1.default);
app.use("/api/hw/appointments/manage-service-types", ServiceTypeRoutes_1.default);
app.use("/api/hw/appointments/manage-provider-schedules", ManageProviderScheduleRoutes_1.default);
app.use("/api/hw/appointments/manage-appointment-requests", AppointmentRequestsRoutes_1.default);
app.use("/api/hw/appointments/manage-appointments", ManageAppointmentsRoutes_1.default);
app.use("/api/ec", contentRoutes_1.default);
// CHAT
app.use("/api/c", MessageRoutes_1.default);
// CONTENT
app.use("/api/hw/educational-content", ContentRoutes_1.default);
// Serve static files from the uploads directory
app.use("/uploads", express_1.default.static(path_1.default.join(__dirname, "..", "uploads")));
app.use("/static", express_1.default.static(path_1.default.join(__dirname, "frontend/public")));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map