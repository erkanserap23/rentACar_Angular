import { CarsAbstractService } from '../abstracts/cars-abstract-service';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { enviroment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Car } from '../../models/car-dto';

@Injectable()
export class CarsMockService extends CarsAbstractService {

  private readonly apiControllerUrl = `${enviroment.apiUrl}/cars/`;
  constructor(private httpClient: HttpClient) {
    super();
  }

  // TODO getList
  getList(): Observable<Car[]> {
    const subject = new Subject<Car[]>();
  
    this.httpClient.get<Car[]>(this.apiControllerUrl + '?_expand=model&_expand=brand/')
      .subscribe({
        next: (data) => {
          console.log('Data received:', data);
          subject.next(data);
        },
        error: (error) => {
          console.error('Error:', error);
          subject.error(error);
        },
        complete: () => {
          console.log('Request completed for getList');
          subject.complete();
        }
      });
  
    return subject.asObservable();
  }

  // TODO getCarsByBrand
  getCarsByBrand(id: number): Observable<Car[]> {
    const subject = new Subject<Car[]>();
  
    this.httpClient.get<Car[]>(`${this.apiControllerUrl}?_expand=model&_expand=brand&brandId=${id}`)
      .subscribe({
        next: (data) => {
          console.log('Data received for brand ID:', id, data);
          subject.next(data);
        },
        error: (error) => {
          console.error('Error fetching cars for brand ID:', id, error);
          subject.error(error);
        },
        complete: () => {
          console.log('Request completed for getCarsByBrand with brand ID:', id);
          subject.complete();
        }
      });
  
    return subject.asObservable();
  }
 
  // TODO AddCar
  addCar(car: Car): Observable<Car> {
    const subject = new Subject<Car>();
  
    this.httpClient.post<Car>(this.apiControllerUrl, car)
      .subscribe({
        next: (data) => {
          console.log('Car added successfully:', data);
          subject.next(data);
        },
        error: (error) => {
          console.error('Error adding car:', error);
          subject.error(error);
        },
        complete: () => {
          console.log('Request completed for addCar');
          subject.complete();
        }
      });
  
    return subject.asObservable();
  }
  // TODO updateCar
  updateCar(id: number, car: Car): Observable<Car> {
    const subject = new Subject<Car>();
  
    this.httpClient.put<Car>(`${this.apiControllerUrl}${id}`, car)
      .subscribe({
        next: (data) => {
          console.log(`Car with ID ${id} updated successfully:`, data);
          subject.next(data);
        },
        error: (error) => {
          console.error(`Error updating car with ID ${id}:`, error);
          subject.error(error);
        },
        complete: () => {
          console.log(`Request completed for updateCar with ID ${id}`);
          subject.complete();
        }
      });
  
    return subject.asObservable();
  }
  // TODO deleteCar
  deleteCar(id: number): Observable<Car> {
    const subject = new Subject<Car>();
  
    this.httpClient.delete<Car>(`${this.apiControllerUrl}${id}`)
      .subscribe({
        next: (data) => {
          console.log(`Car with ID ${id} deleted successfully:`, data);
          subject.next(data);
        },
        error: (error) => {
          console.error(`Error deleting car with ID ${id}:`, error);
          subject.error(error);
        },
        complete: () => {
          console.log(`Request completed for deleteCar with ID ${id}`);
          subject.complete();
        }
      });
  
    return subject.asObservable();
  }
 


}
   //  * next İşlem başarılı olduğunda
   //  ! error İşlem başarısız olduğunda, error oluştuğunda
   //  ? İzlediğimiz (subscribe olduğumuz) subject tamamlanıp kapandığında

/*
!readonly anahtar kelimesi, 
TypeScript'te bir sınıfın özelliğinin sadece sınıfın inşa edildiği zaman atanabileceğini,
 ancak sonrasında değiştirilemeyeceğini belirtmek için kullanılır.
*/ 


// ? örnek kod
// getList(request: GetCarsListRequest): Observable<GetCarsListResponse> {
//   console.log('CarsMockService.getList()');

//   const subject: Subject<GetCarsListResponse> =
//     new Subject<GetCarsListResponse>();

//   const params: any = {
//     _page: request.pageIndex,
//     _limit: request.pageSize,
//   };
//   if (request.brandId != null) params['model.brandId'] = request.brandId;

//   this.httpClient
//     .get<CarListItemDto[]>(this.apiControllerUrl, {
//       params, //= params: params
//     })
//     .subscribe({
//       next: (data) => {
//         // İşlem başarılı olduğunda
//         const response: GetCarsListResponse = {
//           pageIndex: request.pageIndex,
//           pageSize: request.pageSize,
//           count: data.length,
//           hasNextPage: true,
//           hasPreviousPage: true,
//           items: data,
//         };

//         subject.next(response);
//       },
//       error: (error) => {
//         // İşlem başarısız olduğunda, error oluştuğunda
//         subject.error(error);
//       },
//       complete: () => {
//         // İzlediğimiz (subscribe olduğumuz) subject tamamlanıp kapandığında
//         subject.complete();
//       },
//     });

//   return subject.asObservable();
// }
// }