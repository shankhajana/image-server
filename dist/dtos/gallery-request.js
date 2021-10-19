"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GalleryRequest {
    constructor(json) {
        this.userId = json.userId;
        this.limit = parseInt(json.limit);
        this.offset = parseInt(json.offset);
    }
}
exports.default = GalleryRequest;
//# sourceMappingURL=gallery-request.js.map