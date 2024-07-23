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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ContentCategory_1 = require("../models/ContentCategory");
var db_1 = require("../utils/db");
var categories = [
    {
        name: 'Prenatal Care',
        description: 'Comprehensive information and guidelines on prenatal care to ensure a healthy pregnancy journey.',
    },
    {
        name: 'Postnatal Care',
        description: 'Essential advice and practices for the health and well-being of both mother and baby after birth.',
    },
    {
        name: 'Nutrition',
        description: "Dietary recommendations and nutritional advice for expecting and new mothers to support their health and the baby's development.",
    },
    {
        name: 'Exercise and Fitness',
        description: 'Safe and effective exercise routines and fitness tips tailored for pregnant and postpartum women.',
    },
    {
        name: 'Mental Health',
        description: 'Resources and support for managing mental health during and after pregnancy, including dealing with anxiety, depression, and stress.',
    },
    {
        name: 'Family Planning',
        description: 'Information on family planning methods and contraception options to help manage reproductive health.',
    },
    {
        name: 'Labor and Delivery',
        description: 'Guidance and tips on preparing for labor and delivery, including pain management and birthing options.',
    },
    {
        name: 'Breastfeeding',
        description: 'Advice and support for breastfeeding, including techniques, benefits, and overcoming common challenges.',
    },
    {
        name: 'Newborn Care',
        description: 'Practical tips and information on caring for a newborn, including feeding, sleeping, and hygiene.',
    },
    {
        name: 'Vaccinations and Immunizations',
        description: 'Information on important vaccinations and immunizations for both mother and baby.',
    },
    {
        name: 'Common Pregnancy Symptoms and Remedies',
        description: 'Insights into common pregnancy symptoms and safe remedies to alleviate discomfort.',
    },
    {
        name: 'Emergency and Complications',
        description: 'Guidance on handling emergencies and complications during pregnancy and postpartum.',
    },
    {
        name: 'Announcements and Updates',
        description: 'Latest updates and announcements related to maternal health and well-being.',
    },
    {
        name: 'Healthy Lifestyle Tips',
        description: 'Tips and advice for maintaining a healthy lifestyle during and after pregnancy.',
    },
    {
        name: 'Medical Appointments and Tracking',
        description: 'Tools and advice for scheduling and tracking medical appointments and check-ups.',
    },
    {
        name: 'Support Groups and Resources',
        description: 'Information on finding and joining support groups and accessing valuable resources for expecting and new mothers.',
    },
    {
        name: 'Medications and Supplements',
        description: 'Safe medication and supplement use during pregnancy and breastfeeding.',
    },
];
var populateCategories = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, db_1.default)()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, 5, 6]);
                return [4 /*yield*/, ContentCategory_1.default.insertMany(categories)];
            case 3:
                _a.sent();
                console.log('Data inserted successfully');
                return [3 /*break*/, 6];
            case 4:
                error_1 = _a.sent();
                console.error('Error inserting data:', error_1);
                return [3 /*break*/, 6];
            case 5:
                mongoose_1.default.disconnect();
                return [7 /*endfinally*/];
            case 6: return [2 /*return*/];
        }
    });
}); };
populateCategories();
