import { Observable } from "rxjs";
import { Brand } from "./brand";

export interface BrandServiceData {
    getBrands(): Observable<Brand[]>;
}
