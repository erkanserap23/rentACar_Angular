import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipePipe } from '../features/vehicle/pipes/filter-pipe.pipe';
import { VatAddedPipe } from '../features/vehicle/pipes/vat-added.pipe';
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CarService } from '../features/vehicle/services/car.service';
import { CartService } from './services/cart.service';
import { ModelService } from './services/model.service';
import { BrandService } from '../features/brand/services/brand.service';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';



@NgModule({
  declarations: [

  
    NaviComponent,
    FooterComponent,
    CartSummaryComponent,
    MainLayoutComponent
  ],
  imports: [
  CommonModule,
  RouterModule
  ],
  exports:[
    NaviComponent,
    FooterComponent
  ],
  providers:[
   CartService,ModelService
  ]

})
export class SharedModule { }
