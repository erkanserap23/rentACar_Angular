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

  getList(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiControllerUrl+'?_expand=model&_expand=brand/' );
  }

  getCarsByBrand(id: number):Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiControllerUrl+'?_expand=model&_expand=brand/');
  }
 
  addCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(this.apiControllerUrl,car);
  }

  updateCar(id: number, car: Car): Observable<Car> {
    return this.httpClient.put<Car>(this.apiControllerUrl+id,car);
  }

  deleteCar(id: number): Observable<Car> {
    return this.httpClient.delete<Car>(this.apiControllerUrl + id);
  }
 


}

/*

!readonly anahtar kelimesi, 
TypeScript'te bir sınıfın özelliğinin sadece sınıfın inşa edildiği zaman atanabileceğini,
 ancak sonrasında değiştirilemeyeceğini belirtmek için kullanılır.


*/ 



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