import { v4 as uuidv4 } from 'uuid';

export default class BaseResponse{
    requestId:string
    body:any
    constructor(body:any){
        this.body=body;
        this.requestId=uuidv4();
    }
}