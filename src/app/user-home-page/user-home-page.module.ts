import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomePageRoutingModule } from './user-home-page-routing.module';
import { UserHomePageComponent } from './user-home-page.component';


@NgModule({
  declarations: [
    UserHomePageComponent
  ],
  imports: [
    CommonModule,
    UserHomePageRoutingModule
  ]
})
export class UserHomePageModule { }
