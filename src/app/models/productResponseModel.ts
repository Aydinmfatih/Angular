import { ToDos } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductResponseModel extends ResponseModel{

    data:ToDos[];
    
    
}