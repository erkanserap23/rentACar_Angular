import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
   private apiUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  getAllCars(): Observable<Car[]> {
    let newPath = this.apiUrl + 'cars/';
    return this.httpClient.get<Car[]>(newPath);
  }

  getCarByBrand(brandId: number): Observable<Car[]> {
    let newPath = this.apiUrl + 'cars/brandId/' + brandId;
    return this.httpClient.get<Car[]>(newPath);
  }

  addCar(car: Car):Observable<void> {
    let newPath = this.apiUrl + 'cars/add';
    return this.httpClient.post<void>(newPath, car);
  }

  // todo: http://localhost:8080/api/cars/brandId/1
  // **! let newPath=this.apiUrl+"cars/brandId?"+brandId; //? neden?
  // *!<void> ve <responseModel>
}
