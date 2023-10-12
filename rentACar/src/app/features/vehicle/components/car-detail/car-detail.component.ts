import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/shared/models/car';
import { Model } from 'src/app/shared/models/model';
import { CarService } from 'src/app/features/vehicle/services/car.service';
import { ModelService } from 'src/app/shared/services/model.service';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  imgUrl:string
  carForm:FormGroup;
  cars:Car[];
  models:Model[];


  constructor(private carService:CarService,
    private modelService:ModelService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    ){

  }
  ngOnInit(): void {
    this.getAllCarByBrand();
    this.getAllModelByBrand();
    this.UpdateCarForm();

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

  deleteCar(carId:number){
    this.carService.deleteCar(carId).subscribe(res=>{
      console.log(res,"silindi");
      this.toastrService.success("Car deleted ...");
      this.getAllCarByBrand();
    })
  }

  updateCar(){
    if(this.carForm.valid){
      this.toastrService.success("Car updated ...");
  // this.carService.updateCar(carId,car).subscribe(res=>{
  //     console.log(res);
  //     this.toastrService.success("Car updated ...");
  //     this.getAllCarByBrand();
  //   })
    }
    else{
      this.toastrService.error("Car updated ...");
    }
  
      
  }

  UpdateCarForm() {
    this.carForm = this.formBuilder.group({
        plate: ["", Validators.required],
        dailyPrice: ["", Validators.required],
        modelYear: ["", Validators.compose([Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())])],
        state: ["", Validators.required],
        modelId: ["", Validators.required],
        imgUrl: ["", Validators.required]
    });

   
    

 }

getById(carId:number,car:Car){

  this.carForm.patchValue({
    plate: car.plate,
    dailyPrice: car.dailyPrice,
    modelYear:car.modelYear,
    state: car.state,
    modelId:car.modelId,
    imgUrl:car.imgUrl
 
  });

}





}
