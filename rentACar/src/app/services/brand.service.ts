import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../models/brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl ='http://localhost:8080/api/brands';
  constructor(private httpClient:HttpClient) {}
  getBrands():Observable<Brand[]>{
   return this.httpClient.get<Brand[]>(this.apiUrl);
  }
}
