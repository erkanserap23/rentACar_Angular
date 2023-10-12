import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from './shared/shared.module';
import { VehicleModule } from './features/vehicle/vehicle.module';
import { ToastrModule } from 'ngx-toastr';
import { BrandModule } from './features/brand/brand.module';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';

@NgModule({
  declarations: [AppComponent,LoginComponent, HomePagesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    SharedModule,
    VehicleModule,
    BrandModule,

    ToastrModule.forRoot({
      timeOut: 4000,
      progressBar: true,
      closeButton: false,
      progressAnimation: 'decreasing',
      preventDuplicates: true,
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
