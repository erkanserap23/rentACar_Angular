import { Observable } from "rxjs";
import { Brand } from "../models/brand";

export interface BrandServiceData {
    getBrands(): Observable<Brand[]>;
}
