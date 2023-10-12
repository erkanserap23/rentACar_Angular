import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/features/brand/models/brand';

@Injectable({
  providedIn: 'root'
})
export abstract class BrandAbstractService {

  constructor() { }

  // *! Markaları al
  abstract getBrands(): Observable<Brand[]>;

  // *! Yeni marka ekle
  abstract addBrand(brand: Brand): Observable<Brand>;

  // *! Marka güncelle
  abstract updateBrand(brand: Brand): Observable<Brand>;

  // *! Marka sil
  abstract deleteBrand(brandId: number): Observable<void>;
}
