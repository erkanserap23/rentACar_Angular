import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Model } from 'src/app/shared/models/model';
import { CarService } from 'src/app/shared/services/car.service';
import { ModelService } from 'src/app/shared/services/model.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit{
  models:Model[]=[];
  carAddForm:FormGroup;
  modelId:number=0;
  imgUrl:string="https://www.enterprise.com.tr/upload/vehicles/imagew/352/bmwix3sol_637553849385354285.png";
  
  constructor(
    private formBuilder:FormBuilder,
    private modelService:ModelService,
    private carService:CarService,
    private toastrService:ToastrService
    
    ){}
  ngOnInit(): void {
    this.getModelByBrandId();
    this.createCarAddForm();

  }
  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
        plate: ["", Validators.required],
        dailyPrice: ["", Validators.required],
        modelYear: ["", Validators.compose([Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())])],
        state: ["", Validators.required],
        modelId: ["", Validators.required],
        imgUrl: ["", Validators.required]
    });

 }

//  getAllModel(){
//   this.modelService.getAllModel().subscribe(response=>{
//   this.models=response;
//   console.log(this.models);
// })
//  }


 addToCar(){
  if(this.carAddForm.valid)
  {
    let carModel= Object.assign({},this.carAddForm.value);
  this.carService.addCar(carModel).subscribe(response=>{
   this.toastrService.success("Arabanız Kayıt Edildi");
  },responseError=>{
    this.toastrService.error(responseError.error.message);
  })
 
  }
  else{
   this.toastrService.error(   "Kayıt Alınamadı" ,"Formunuz eksik");
  }
  }


  getModelByBrandId(){
    this.modelService.getModelByBrand().subscribe(res=>{
      this.models=res;
      console.log("res",res);
    })
  }



}


//  *!  -- sor !!  Object.assign({},tüm alanları ekler ) burada 
// *!  Validators.minLength(10)