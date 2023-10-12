import { Brand } from "src/app/features/brand/models/brand"

export interface Model {
    id: number,
    modelName: string,
    brandId:number
    brand:Brand
}
