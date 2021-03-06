import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageBookingsComponent } from './manage-bookings.component';

const routes: Routes = [{ path: '', component: ManageBookingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBookingsRoutingModule { }
