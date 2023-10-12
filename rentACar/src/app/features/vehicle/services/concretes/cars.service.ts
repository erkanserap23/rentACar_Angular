import { CarsAbstractService as CarsAbstractService } from '../abstracts/cars-abstract-service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Car } from '../../models/car-dto';

@Injectable()
export class CarsService extends CarsAbstractService {

  private readonly apiControllerUrl = `${enviroment.apiUrl}/cars`;

  constructor(private httpClient: HttpClient) {
    super();
  }
 
  getList(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiControllerUrl+"/getAll" );
  }

  getCarsByBrand(id: number):Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiControllerUrl+"brandId/"+id);
  }
 
  addCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(this.apiControllerUrl+"/addCar",car);
  }

  updateCar(id: number, car: Car): Observable<Car> {
    return this.httpClient.put<Car>(this.apiControllerUrl+"/getById"+id,car);
  }

  deleteCar(id: number): Observable<Car> {
    return this.httpClient.delete<Car>(this.apiControllerUrl+"/deleteCar"+id);
  }

}

