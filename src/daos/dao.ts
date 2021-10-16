import Image from "../entities/image";
import { v4 as uuidv4 } from 'uuid';
import mysql = require('mysql');
import GalleryRequest from "../dtos/gallery-request";

/* sqls */
const INSERT_INTO_IMAGE_SQL = 'INSERT INTO image_table SET ?';
const SELECT_IMAGES_OF_A_USER = 'SELECT * FROM image_table WHERE userId = ? LIMIT ?,?';
const SELECT_SINGLE_IMAGE = 'SELECT * FROM image_table WHERE imageId = ? LIMIT 1';

let connection: mysql.Connection = null;

export const init = (config:any):void => {
    connection = mysql.createConnection(config);
    connection.connect(function(err) {
        if (err) {
          console.error('error connecting to database : ' + err.stack);
          return;
        }
        console.log('connected to database with id ' + connection.threadId);
    });
}

export const getImages = (req:GalleryRequest, callback:any):void => {
    console.log(" req: "+JSON.stringify(req));
    
    const query = connection.query(
        SELECT_IMAGES_OF_A_USER,
        [req.userId, req.offset, req.limit],
        function (error, results, fields) {
            if (error) {
                console.error("unable to fetch images: "+JSON.stringify(req));
                throw error;
            }
            else{
                const images:Image[] = [];
                results.forEach((row: any) => {
                    images.push(Image.fromJSON(row));
                });
                callback(images);
            }
        }
      );
    //console.debug(query.sql);
};

export const saveImage = (image:Image, callback:any) :any =>{
    //generate id
    image.$imageId=uuidv4();
    const query = connection.query(
        INSERT_INTO_IMAGE_SQL,
        image,
        function (error, results, fields) {
            if (error) {
                console.error("unable to save image: "+JSON.stringify(image));
                throw error;
            }
            else{
                console.info("image "+image.$imageId+" saved to the database!");
                callback(image.$imageId);
            }
        }   
    );
    //console.debug(query.sql);
}

export const getImage = (imageId:string, callback:any):void =>{
    console.log(" imageId: "+imageId);

    const query = connection.query(
        SELECT_SINGLE_IMAGE,
        imageId,
        function (error, results, fields) {
            if (error) {
                console.error("unable to fetch for id: "+imageId);
                throw error;
            }
            else{
                let image:Image;
                results.forEach((row: any) => {
                    image = Image.fromJSON(row);
                });
                callback(image);
            }
        }
      );
    //console.debug(query.sql);s
}