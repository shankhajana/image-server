import { Request, Response } from 'express';
import GalleryRequest from '../dtos/gallery-request';
import { getResponse } from '../utilities/web-utils';
import { getImages } from '../daos/dao';
import Image from '../entities/image';

export const galleryHandler = (req: Request, res: Response) => {
    const request:GalleryRequest = new GalleryRequest(req.body);
    
    getImages(request,
        /* success handler */
        (images:Image[]):void => {
            res.json(getResponse(images));
        }
    );
};