import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightScheduleComponent } from './flight-schedule.component';

const routes: Routes = [{ path: '', component: FlightScheduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightScheduleRoutingModule { }
