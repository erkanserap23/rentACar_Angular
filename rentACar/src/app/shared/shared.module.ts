import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CarService } from './services/car.service';
import { CartService } from './services/cart.service';
import { ModelService } from './services/model.service';
import { BrandService } from './services/brand.service';



@NgModule({
  declarations: [
    FilterPipePipe,
    VatAddedPipe,
    NaviComponent,
    FooterComponent,
    CartSummaryComponent

  ],
  imports: [
  CommonModule,
  ],
  exports:[
    FilterPipePipe,
    VatAddedPipe,
    NaviComponent,
    FooterComponent
  ],
  providers:[
    CarService,BrandService,CartService,ModelService
  ]

})
export class SharedModule { }
