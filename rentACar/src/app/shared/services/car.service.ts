import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { Observable } from 'rxjs';
import { CarServiceData } from '../models/car-service-data';

@Injectable({
  providedIn: 'root',
})
export class CarService  {
   private apiUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  getAllCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(
      this.apiUrl + 'cars/?_expand=model&_expand=brand/'
    );
  }

  getCarByBrand(): Observable<Car[]> {
    let url =(this.apiUrl+'cars/?_expand=model&_expand=brand/');
    return this.httpClient.get<Car[]>(url);
  }

  addCar(car: Car){
    let newPath = this.apiUrl +'cars/add';
    return this.httpClient.post(newPath, car);
  }

  // todo: http://localhost:8080/api/cars/brandId/1
  // **! let newPath=this.apiUrl+"cars/brandId?"+brandId; //? neden?
  // *!<void> ve <responseModel>
}
