import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookFlightRoutingModule } from './book-flight-routing.module';
import { BookFlightComponent } from './book-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookFlightComponent
  ],
  imports: [
    CommonModule,
    BookFlightRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BookFlightModule { }
