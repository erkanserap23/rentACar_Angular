import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './pages/car/car.component';
import { CarAddComponent } from './pages/car-add/car-add.component';
import { LoginComponent } from './pages/login/login.component';



const routes: Routes = [
  { path:"",pathMatch:"full", component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brandId/:brandId",component:CarComponent},
  {path:"cars/add", component:CarAddComponent},
  {path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
