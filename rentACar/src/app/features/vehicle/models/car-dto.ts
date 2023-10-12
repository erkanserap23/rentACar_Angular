import { Model } from "src/app/shared/models/model-dto";
export interface Car {
    
    id:number;
    plate: string;
    dailyPrice:number;
    modelYear: number;
    state: number;
    modelId: number;
    imgUrl:string;
    model:Model

}
