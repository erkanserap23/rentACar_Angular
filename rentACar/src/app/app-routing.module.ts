import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarAddComponent } from './features/vehicle/components/car-add/car-add.component';
import { LoginComponent } from './pages/login/login.component';
import { CarPageComponent } from './features/vehicle/components/car-page/car-page.component';
import { CarDetailComponent } from './features/vehicle/components/car-detail/car-detail.component';
import { CarListComponent } from './features/vehicle/components/car-list/car-list.component';



const routes: Routes = [
  { path:"",pathMatch:"full", component:CarListComponent},
  {path:"cars",component:CarListComponent},
  {path:"cars/detail/add", pathMatch:"full", component:CarAddComponent},
  {path:"cars/detail", pathMatch:"full", component:CarDetailComponent},
  {path:"cars/:brandId",component:CarListComponent},
  {path:"login",component:LoginComponent},
  {path:"cars/getCars",component:CarPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
