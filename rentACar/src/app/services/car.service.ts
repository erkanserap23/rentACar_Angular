import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl ='http://localhost:8080/api/';

  constructor(private httpClient:HttpClient) { }

    
  getAllCars():Observable<Car[]>{
    let newPath=this.apiUrl+"cars/getAll";
    return this.httpClient.get<Car[]>(newPath)
      }

  getCarByBrand(brandId:number):Observable<Car[]>{
    let newPath=this.apiUrl+"cars/brandId/"+brandId;
    return this.httpClient.get<Car[]>(newPath);
  }

  // todo: http://localhost:8080/api/cars/brandId/1   
  // **! let newPath=this.apiUrl+"cars/brandId?"+brandId; //? neden?
  

}