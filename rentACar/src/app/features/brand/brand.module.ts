import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations:[BrandListComponent],
  imports:[CommonModule,RouterModule],
  exports:[BrandListComponent]
})
export class BrandModule { }
