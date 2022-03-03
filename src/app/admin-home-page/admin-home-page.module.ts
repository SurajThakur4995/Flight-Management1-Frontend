import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomePageRoutingModule } from './admin-home-page-routing.module';
import { AdminHomePageComponent } from './admin-home-page.component';


@NgModule({
  declarations: [
    AdminHomePageComponent
  ],
  imports: [
    CommonModule,
    AdminHomePageRoutingModule
  ]
})
export class AdminHomePageModule { }
