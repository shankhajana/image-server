export default class GalleryRequest{

    userId:string;
    limit:number;
    offset:number;

    constructor(json:any){
        this.userId=json.userId;
        this.limit=json.limit;
        this.offset=json.offset;
    }
}