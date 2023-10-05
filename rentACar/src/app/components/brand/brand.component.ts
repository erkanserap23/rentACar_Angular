import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  dataLoaded:boolean=false;
  brands: Brand[] = [];

  constructor(private brandService: BrandService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.getAllBrands();
  },1000);   
  // **!biraz bekletelim :)
   
  }

  getAllBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response;
      this.dataLoaded=true;
    });
  }
}
