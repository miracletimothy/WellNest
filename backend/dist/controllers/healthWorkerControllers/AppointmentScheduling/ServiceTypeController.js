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
exports.deleteServiceType = exports.updateServiceType = exports.createServiceType = exports.getAllServiceTypes = void 0;
const ServiceTypeModel_1 = __importDefault(require("../../../models/AppointmentScheduling/ServiceTypeModel"));
const getAllServiceTypes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceTypes = yield ServiceTypeModel_1.default.find();
        res.json(serviceTypes);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAllServiceTypes = getAllServiceTypes;
const createServiceType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, duration, description } = req.body;
    try {
        const newServiceType = new ServiceTypeModel_1.default({ name, duration, description });
        yield newServiceType.save();
        res.status(201).json(newServiceType);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createServiceType = createServiceType;
const updateServiceType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, duration, description } = req.body;
    try {
        const updatedServiceType = yield ServiceTypeModel_1.default.findByIdAndUpdate(id, { name, duration, description }, { new: true });
        if (!updatedServiceType) {
            return res.status(404).json({ message: "Service Type not found" });
        }
        res.json(updatedServiceType);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.updateServiceType = updateServiceType;
const deleteServiceType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedServiceType = yield ServiceTypeModel_1.default.findByIdAndDelete(id);
        if (!deletedServiceType) {
            return res.status(404).json({ message: "Service Type not found" });
        }
        res.json({ message: "Service Type deleted" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteServiceType = deleteServiceType;
//# sourceMappingURL=ServiceTypeController.js.map