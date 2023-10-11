import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { BrandComponent } from './pages/brand/brand.component';
import { CarAddComponent } from './pages/car-add/car-add.component';
import { LoginComponent } from './pages/login/login.component';
import { CarComponent } from './pages/car/car.component';

import { SharedModule } from './shared/shared.module';

import { ToastrModule } from 'ngx-toastr';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';




@NgModule({
  declarations: [
    
   AppComponent,
    BrandComponent,
    CarAddComponent,
    CarComponent,
    LoginComponent,
    CarDetailComponent,


  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    
    ToastrModule.forRoot({
      timeOut:4000,
      progressBar:true,
      closeButton:false,
      progressAnimation:"decreasing",
      preventDuplicates:true,
      positionClass:"toast-bottom-right",
    
    })
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
