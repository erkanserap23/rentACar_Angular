import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';


@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filterText: string, filteredCount: { count: number }): Car[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";

    const filteredCars = filterText ? 
      value.filter((c: Car) => c.model.modelName.toLocaleLowerCase().indexOf(filterText) !== -1) : 
      value;

    // Filtrelenmiş araç sayısını set ediyoruz.
    filteredCount.count = filteredCars.length;
    return filteredCars;
  }
}


//farkı nedir ?
//toLowerCase()
//toLocaleLowerCase()
//başlangıç index i denilen -1 ?