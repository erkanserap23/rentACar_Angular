import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/shared/models/car';
import { Model } from 'src/app/shared/models/model';
import { CarService } from 'src/app/shared/services/car.service';
import { ModelService } from 'src/app/shared/services/model.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:Car[];
  models:Model[];
  constructor(private carService:CarService,private modelService:ModelService){

  }
  ngOnInit(): void {
    this.getAllCarByBrand();
    this.getAllModelByBrand();

  }
  getAllCarByBrand(){
    this.carService.getCarByBrand().subscribe(res=>{
      this.cars=res;
      console.log(res,"fdfdfd")
    
    })
  }
  getAllModelByBrand(){
    this.modelService.getModelByBrand().subscribe(res=>{
      this.models=res;
      console.log(res,"fdfdfd")
    })
  }




}
