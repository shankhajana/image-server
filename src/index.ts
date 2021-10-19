import express from 'express';
/* multer middleware for file upload */
import multer from 'multer';

/* user-defined scripts */
import { galleryHandler } from './handlers/gallery-handler';
import { getImageHandler, saveImageHandler } from './handlers/image-handler';
import { getResponse } from './utilities/web-utils';
import { init } from './daos/dao';

const STATIC_DIR="uploads";
const FIVE_MB_IN_BYTES=5000000;

/* configure file upload middleware */
const fileuploaderMiddleWare = multer({
   dest: STATIC_DIR,
   limits: { fileSize: FIVE_MB_IN_BYTES }
});
//set up port to be fetched from ENV
const port = process.env.PORT || '8000';
//create express app
const app = express();
//use json parser
app.use(express.json());
app.use(express.static(STATIC_DIR));
/* filter */
app.use(function (req, res, next) {
  console.log(req.method+": "+req.url+ " size: "+req.headers['content-length']+" bytes");
  /* authentication logic goes here */
  if (true){
      next();
  } else {
      res.status(403).json(getResponse("bad request!"));
  }
});

/* handlers */
app.post( "/gallery",  galleryHandler);
app.get( "/get-image/:id", getImageHandler);

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
  saveImageHandler
);




// start the Express server
app.listen( port, () => {
  /* open connection to db */
  init({
    host     : 'localhost',
    port     : 3306, 
    user     : 'root',
    password : 'root',
    database : 'imgdb',
    ssl      : false
  });
  console.log( `server started at : http://localhost:${ port }` );
} );