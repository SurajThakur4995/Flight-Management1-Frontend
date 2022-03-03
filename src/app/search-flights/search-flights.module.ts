import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchFlightsRoutingModule } from './search-flights-routing.module';
import { SearchFlightsComponent } from './search-flights.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchFlightsComponent
  ],
  imports: [
    CommonModule,
    SearchFlightsRoutingModule,
    FormsModule
  ]
})
export class SearchFlightsModule { }
