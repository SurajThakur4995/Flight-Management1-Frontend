import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAirlinesRoutingModule } from './manage-airlines-routing.module';
import { ManageAirlinesComponent } from './manage-airlines.component';


@NgModule({
  declarations: [
    ManageAirlinesComponent
  ],
  imports: [
    CommonModule,
    ManageAirlinesRoutingModule
  ]
})
export class ManageAirlinesModule { }
