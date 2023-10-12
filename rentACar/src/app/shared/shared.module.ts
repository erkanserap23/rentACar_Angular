import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartService } from './services/cart.service';
import { ModelService } from './services/model.service';
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
    FooterComponent,
    MainLayoutComponent
  ],
  providers:[
   CartService,ModelService
  ]

})
export class SharedModule { }
