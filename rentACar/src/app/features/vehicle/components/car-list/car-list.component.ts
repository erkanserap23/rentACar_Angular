import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/concretes/cars.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { Car } from 'src/app/features/vehicle/models/car-dto';
import { CarsAbstractService } from '../../services/abstracts/cars-abstract-service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  dataLoaded: boolean = false;
  cars: Car[] = [];
  filterText: string = '';
  filteredCount = { count: 0 };

  constructor(
    private carService:CarsAbstractService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService:CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        setTimeout(() => {
          this.getCarByBarand(params['brandId']);
          console.log("paramaetre"+params['brandId'])
        }, 1000);
      } else {
        setTimeout(() => {
          this.getCar();
        }, 2000);
      }
    });
  }

  getCar() {
    this.carService.getList().subscribe((response) => {
      this.cars =response;
      console.log(response);
      this.dataLoaded = true;
    });
  }

  getCarByBarand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
   this.cars=response.filter(f=>f.model.brandId==brandId);
    
      this.dataLoaded = true;
      console.log("deger",response);
    });
  }
  addToCar(car: Car) {
    if(car.state==3){
    this.toastrService.error("Araba Bakımda");
    }
    else{
      this.cartService.addToCart(car);
      this.toastrService.success("Sepete Eklendi : " +car.model.modelName);
    }
  }
}
