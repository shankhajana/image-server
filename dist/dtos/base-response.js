"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class BaseResponse {
    constructor(body) {
        this.body = body;
        this.requestId = uuid_1.v4();
    }
}
exports.default = BaseResponse;
//# sourceMappingURL=base-response.js.map