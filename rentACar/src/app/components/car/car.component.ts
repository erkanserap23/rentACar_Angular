import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  dataLoaded:boolean=true;
  cars: Car[] = [];
  constructor(private carService:CarService , private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
 
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
          this.getCarByBarand(params["brandId"]);
          console.log(params["brandId"]);
      }
      else{
        this.getCar();
      
      }
 
  })

  }

getCar() {
  this.carService.getAllCars().subscribe(response=>{
    this.cars=response;
    this.dataLoaded=true;
  });
}

getCarByBarand(brandId:number){
  this.carService.getCarByBrand(brandId).subscribe(response=>{
    this.cars=response;
    this.dataLoaded=true;
  })
}


}


// setTimeout(() => {
//   this.getCar()
// }, 1000); 