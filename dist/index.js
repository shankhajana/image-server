"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
/* multer middleware for file upload */
const multer_1 = __importDefault(require("multer"));
/* user-defined scripts */
const gallery_handler_1 = require("./handlers/gallery-handler");
const image_handler_1 = require("./handlers/image-handler");
const web_utils_1 = require("./utilities/web-utils");
const dao_1 = require("./daos/dao");
const STATIC_DIR = "uploads";
const FIVE_MB_IN_BYTES = 5000000;
/* configure file upload middleware */
const fileuploaderMiddleWare = multer_1.default({
    dest: STATIC_DIR,
    limits: { fileSize: FIVE_MB_IN_BYTES }
});
//set up port to be fetched from ENV
const port = process.env.PORT || '8000';
//create express app
const app = express_1.default();
//use json parser
app.use(express_1.default.json());
app.use(express_1.default.static(STATIC_DIR));
/* filter */
app.use(function (req, res, next) {
    console.log(req.method + ": " + req.url + " size: " + req.headers['content-length'] + " bytes");
    /* authentication logic goes here */
    if (true) {
        next();
    }
    else {
        res.status(403).json(web_utils_1.getResponse("bad request!"));
    }
});
/* handlers */
app.post("/gallery", gallery_handler_1.galleryHandler);
app.get("/get-image/:id", image_handler_1.getImageHandler);
/* NOTE : form should look like this

<form action="/save-image" method="post" enctype="multipart/form-data">
  <input type="file" name="image-file" />
</form>
  
*/
app.post("/save-image", 
/* save the image file upload from the  multipart/form-data
once this middleware executes, processed information available in 'req.file' attribute
*/
fileuploaderMiddleWare.single('image-file'), 
/* run the handler after image has been uploaded */
image_handler_1.saveImageHandler);
// start the Express server
app.listen(port, () => {
    /* open connection to db */
    dao_1.init({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'imgdb',
        ssl: false
    });
    console.log(`server started at : http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map