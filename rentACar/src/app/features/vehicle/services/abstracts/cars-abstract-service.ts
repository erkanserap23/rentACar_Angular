import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Car } from "../../models/car-dto";

@Injectable()
export abstract class CarsAbstractService {

  abstract getList(): Observable<Car[]>;
  abstract getCarsByBrand(id: number): Observable<Car[]>;
  abstract addCar(car: Car):Observable<Car>;
  abstract updateCar(id:number,car:Car): Observable<Car>;
  abstract deleteCar(id:number): Observable<Car>

}

/*
Metod Uygulamaları:
!Interface: Sadece metod tanımlamalarını içerir, bu metodların uygulamalarını (içeriklerini) içermez.
?Abstract Class: Hem metod tanımlamalarını hem de bu metodların varsayılan uygulamalarını içerebilir. 
?Bu, türetilen sınıfların bu varsayılan uygulamaları kullanmasına veya override ederek değiştirmesine olanak tanır.

!Interface:Sadece property ve metod tanımlamalarını içerir, durum bilgisini (örneğin, sınıf içi değişkenler) içermez.
?Abstract Class: Durum bilgisi, yani sınıf içi değişkenler ve property'ler içerebilir.

Çoklu Miras:
!Interface: Bir sınıf, birden fazla interface'i implemente edebilir, bu da çoklu mirasa olanak tanır.
?Abstract Class: TypeScript'te bir sınıf sadece bir sınıftan türetilebilir, bu da çoklu mirası desteklemez.

Yeniden Kullanılabilirlik:
!Abstract sınıflar, bazı ortak işlevselliği ve davranışları önceden tanımlayarak yeniden kullanılabilirlik sağlar. 
!Türetilen sınıflar bu ortak işlevselliği kullanabilir veya ihtiyaçlarına göre değiştirebilir.

Genişletilebilirlik:
?Abstract sınıflar, gelecekteki genişletmelere hazır bir yapı sunabilir. Özellikle belirli bir temel davranışın veya işlevselliğin tüm türevlerde korunması gerektiğinde abstract sınıflar faydalıdır.
!Eğer sadece bir sözleşme veya tip tanımı oluşturmak istiyorsanız, interface kullanabilirsiniz.
 Ancak ortak bir temel işlevselliği veya durum bilgisini paylaşmak istiyorsanız, 
 abstract sınıflar daha uygun bir seçenek olabilir.

*/