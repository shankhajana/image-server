"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImage = exports.saveImage = exports.getImages = exports.init = void 0;
const image_1 = __importDefault(require("../entities/image"));
const uuid_1 = require("uuid");
const mysql = require("mysql");
/* sqls */
const INSERT_INTO_IMAGE_SQL = 'INSERT INTO image_table SET ?';
const SELECT_IMAGES_OF_A_USER = 'SELECT * FROM image_table WHERE userId = ? LIMIT ?,?';
const SELECT_SINGLE_IMAGE = 'SELECT * FROM image_table WHERE imageId = ? LIMIT 1';
let connection = null;
exports.init = (config) => {
    connection = mysql.createConnection(config);
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting to database : ' + err.stack);
            return;
        }
        console.log('connected to database with id ' + connection.threadId);
    });
};
exports.getImages = (req, callback) => {
    console.log(" req: " + JSON.stringify(req));
    const query = connection.query(SELECT_IMAGES_OF_A_USER, [req.userId, req.offset, req.limit], function (error, results, fields) {
        if (error) {
            console.error("unable to fetch images: " + JSON.stringify(req));
            throw error;
        }
        else {
            const images = [];
            results.forEach((row) => {
                images.push(image_1.default.fromJSON(row));
            });
            callback(images);
        }
    });
    //console.debug(query.sql);
};
exports.saveImage = (image, callback) => {
    //generate id
    image.$imageId = uuid_1.v4();
    const query = connection.query(INSERT_INTO_IMAGE_SQL, image, function (error, results, fields) {
        if (error) {
            console.error("unable to save image: " + JSON.stringify(image));
            throw error;
        }
        else {
            console.info("image " + image.$imageId + " saved to the database!");
            callback(image.$imageId);
        }
    });
    //console.debug(query.sql);
};
exports.getImage = (imageId, callback) => {
    console.log(" imageId: " + imageId);
    const query = connection.query(SELECT_SINGLE_IMAGE, imageId, function (error, results, fields) {
        if (error) {
            console.error("unable to fetch for id: " + imageId);
            throw error;
        }
        else {
            let image;
            results.forEach((row) => {
                image = image_1.default.fromJSON(row);
            });
            callback(image);
        }
    });
    //console.debug(query.sql);s
};
//# sourceMappingURL=dao.js.map