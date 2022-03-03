import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { UserRegistrationComponent } from './user-registration.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserRegistrationComponent
  ],
  imports: [
    CommonModule,
    UserRegistrationRoutingModule,
    FormsModule
  ]
})
export class UserRegistrationModule { }
