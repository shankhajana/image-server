import BaseResponse from "../dtos/base-response";

export const getResponse = (body:any):BaseResponse=>{
    return new BaseResponse(body);
}