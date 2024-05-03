"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
const port = 8080;
app.use(cors_1.default);
app.use(express_1.default.json());
app.use('/api/v1', userRoutes_1.default);
app.listen(port, () => {
    console.log('listing on 3000');
});
