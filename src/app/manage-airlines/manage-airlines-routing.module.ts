import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAirlinesComponent } from './manage-airlines.component';

const routes: Routes = [{ path: '', component: ManageAirlinesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAirlinesRoutingModule { }
