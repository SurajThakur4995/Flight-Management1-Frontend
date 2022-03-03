import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageBookingsRoutingModule } from './manage-bookings-routing.module';
import { ManageBookingsComponent } from './manage-bookings.component';


@NgModule({
  declarations: [
    ManageBookingsComponent
  ],
  imports: [
    CommonModule,
    ManageBookingsRoutingModule
  ]
})
export class ManageBookingsModule { }
