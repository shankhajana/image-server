"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponse = void 0;
const base_response_1 = __importDefault(require("../dtos/base-response"));
exports.getResponse = (body) => {
    return new base_response_1.default(body);
};
//# sourceMappingURL=web-utils.js.map