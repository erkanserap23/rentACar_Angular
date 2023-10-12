import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/features/brand/models/brand';
import { BrandService } from 'src/app/features/brand/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand:Brand;

  //  *TODO: tsconfig.json -- "strictPropertyInitialization": false added.

  constructor(private brandService: BrandService) {}
  ngOnInit(): void {
   this.getBrands();

  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
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
