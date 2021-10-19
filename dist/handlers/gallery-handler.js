"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.galleryHandler = void 0;
const gallery_request_1 = __importDefault(require("../dtos/gallery-request"));
const web_utils_1 = require("../utilities/web-utils");
const dao_1 = require("../daos/dao");
exports.galleryHandler = (req, res) => {
    const request = new gallery_request_1.default(req.body);
    dao_1.getImages(request, 
    /* success handler */
    (images) => {
        res.json(web_utils_1.getResponse(images));
    });
};
//# sourceMappingURL=gallery-handler.js.map