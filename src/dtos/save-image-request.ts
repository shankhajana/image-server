export default class CreateImageRequest {
    
    userId:string;
    title:string;
    description:string;
    
    constructor(json:any){
        this.userId=json.userId;
        this.title=json.title;
        this.description=json.description;
    }
}