import { Brand } from "../../features/brand/models/brand"

export interface Model {
    
    id: number,
    modelName: string,
    brandId:number
    brand:Brand

}
