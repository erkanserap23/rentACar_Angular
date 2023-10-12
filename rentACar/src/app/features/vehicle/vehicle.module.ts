import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarPageComponent } from './components/car-page/car-page.component';
import { CarListComponent } from './components/car-list/car-list.component';

import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { VatAddedPipe } from './pipes/vat-added.pipe';

@NgModule({
  declarations: [
    CarAddComponent,
    CarDetailComponent,
    CarPageComponent,
    CarListComponent,

    FilterPipePipe,
    VatAddedPipe,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CarAddComponent,
    CarDetailComponent,
    CarPageComponent,
    CarListComponent,
  ],
})
export class VehicleModule {}
