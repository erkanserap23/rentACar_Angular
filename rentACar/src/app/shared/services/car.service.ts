import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { Observable } from 'rxjs';


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

  addCar(car: Car):Observable<Car>{
    let newPath = this.apiUrl +'cars';
    return this.httpClient.post<Car>(newPath,car);
  }

  updateCar(id:number,car:Car): Observable<Car> {
    let newPath = this.apiUrl +'cars/';
    return this.httpClient.put<Car>(newPath+id,car);
  }

  deleteCar(id:number): Observable<Car>{
    let newPath = this.apiUrl +'cars/';
    return this.httpClient.delete<Car>(newPath + id);
  }


  // todo: http://localhost:8080/api/cars/brandId/1
  // **! let newPath=this.apiUrl+"cars/brandId?"+brandId; //? neden?
  // *!<void> ve <responseModel>
}
