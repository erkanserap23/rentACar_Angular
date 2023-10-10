import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './pages/car/car.component';
import { CarAddComponent } from './pages/car-add/car-add.component';
import { LoginComponent } from './pages/login/login.component';
import { CarPageComponent } from './pages/car-page/car-page.component';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';



const routes: Routes = [
  { path:"",pathMatch:"full", component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/add", pathMatch:"full", component:CarAddComponent},
  {path:"cars/detail", pathMatch:"full", component:CarDetailComponent},
  {path:"cars/:brandId",component:CarComponent},
  {path:"login",component:LoginComponent},
  {path:"cars/getCars",component:CarPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
