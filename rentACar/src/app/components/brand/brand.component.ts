import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand:Brand;

  //  *TODO: tsconfig.json -- "strictPropertyInitialization": false added.

  constructor(private brandService: BrandService) {}
  ngOnInit(): void {
   this.getBrands();

  }
  getBrands() {
    this.brandService.getAllBrands().subscribe((response) => {
      this.brands = response;
    });

  }

  setCurrentBrand(brand:Brand|null){
    this.currentBrand =brand;
 }

  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "brandActive"
    }else{
      return ""
    }

  }
  
 getAllCurrentBrandClass(){
    if(!this.currentBrand){
      return "brandActive"
    }else{
      return ""
    }

  }




}