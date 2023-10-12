import { Model } from "../../../shared/models/model";

export interface Car {
    id:number;
    plate: string;
    dailyPrice:number;
    modelYear: number;
    state: number;
    modelId: number;
    imgUrl:string;
    model:Model;

}
