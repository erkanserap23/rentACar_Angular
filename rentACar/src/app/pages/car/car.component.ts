import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/shared/models/car';
import { CarService } from 'src/app/shared/services/car.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  dataLoaded: boolean = false;
  cars: Car[] = [];
  filterText: string = '';
  filteredCount = { count: 0 };

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService:CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        setTimeout(() => {
          this.getCarByBarand(params['brandId']);
        }, 1000);
      } else {
        setTimeout(() => {
          this.getCar();
        }, 2000);
      }
    });
  }

  getCar() {
    this.carService.getAllCars().subscribe((response) => {
      this.cars = response;
      this.dataLoaded = true;
    });
  }

  getCarByBarand(brandId: number) {
    this.carService.getCarByBrand(brandId).subscribe((response) => {
      this.cars = response;
      this.dataLoaded = true;
    });
  }

  addToCar(car: Car) {
    if(car.state==3){
    this.toastrService.error("Araba Bakımda");
    }
    else{
      this.cartService.addToCart(car);
      this.toastrService.success("Sepete Eklendi : " +car.modelName);
    }
  }
}
