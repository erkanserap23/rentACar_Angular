import { Observable } from "rxjs";
import { Car } from "./car";

export interface CarServiceData {

  // Tüm arabaları getirir
  getCars(): Observable<Car[]>;

  // Belirli bir ID'ye sahip arabayı getirir
  getCarById(id: number): Observable<Car>;

  // Yeni bir araba ekler
  addCar(car: Car): Observable<Car>;

  // Mevcut bir arabayı günceller
  updateCar(car: Car): Observable<Car>;

  // Belirli bir arabayı siler
  deleteCar(id: number): Observable<void>;

}
