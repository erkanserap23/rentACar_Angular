import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../models/brand';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl ='http://localhost:3000';
  
  constructor(private httpClient:HttpClient) {}

  getBrands():Observable<Brand[]>{
    let newPath=this.apiUrl+"/brands";
   return this.httpClient.get<Brand[]>(newPath);
  }
}
