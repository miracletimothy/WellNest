import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db";
import path from "path";
import authRoutes from "./routes/authRoutes";
import pregnantWomenRoutes from "./routes/pregnantWomenRoutes";
import healthWorkerRoutes from "./routes/healthWorkerRoutes";
import contentRoutes from "./routes/contentRoutes";
import ServiceTypeRoutes from "./routes/AppointmentScheduling/ServiceTypeRoutes";
import ManageProviderScheduleRoutes from "./routes/AppointmentScheduling/ManageProviderScheduleRoutes";
import AppointmentRequestsRoutes from "./routes/AppointmentScheduling/AppointmentRequestsRoutes";
import ManageAppointmentsRoutes from "./routes/AppointmentScheduling/ManageAppointmentsRoutes";
import MessagesRoutes from "./routes/Chat/MessageRoutes";
import ContentRoutes from "./routes/Content/ContentRoutes";

const app: Application = express();

dotenv.config();

connectDB();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-auth-token"],
  })
);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "CMHMCS Server is Running!" });
});

app.use("/api/auth", authRoutes);
app.use("/api/pw", pregnantWomenRoutes);
app.use("/api/hw", healthWorkerRoutes);
app.use("/api/hw/appointments/manage-service-types", ServiceTypeRoutes);
app.use(
  "/api/hw/appointments/manage-provider-schedules",
  ManageProviderScheduleRoutes
);
app.use(
  "/api/hw/appointments/manage-appointment-requests",
  AppointmentRequestsRoutes
);
app.use("/api/hw/appointments/manage-appointments", ManageAppointmentsRoutes);
app.use("/api/ec", contentRoutes);

app.use("/api/c", MessagesRoutes);

app.use("/api/hw/educational-content", ContentRoutes);

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use("/static", express.static(path.join(__dirname, "frontend/public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
});
