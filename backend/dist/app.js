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
const app = (0, express_1.default)();
dotenv_1.default.config();
(0, db_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'https://well-nest-frontend.vercel.app',
    credentials: true, // Allow credentials (cookies, authorization headers)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));
// Default route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'CMHMCS Server is Running!' });
});
// User routes
app.use('/api/auth', authRoutes_1.default);
app.use('/api/pw', pregnantWomenRoutes_1.default);
app.use('/api/hw', healthWorkerRoutes_1.default);
app.use('/api/ec', contentRoutes_1.default);
// Serve static files from the uploads directory
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map