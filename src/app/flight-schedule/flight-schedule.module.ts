import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightScheduleRoutingModule } from './flight-schedule-routing.module';
import { FlightScheduleComponent } from './flight-schedule.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FlightScheduleComponent
  ],
  imports: [
    CommonModule,
    FlightScheduleRoutingModule,
    FormsModule
  ]
})
export class FlightScheduleModule { }
