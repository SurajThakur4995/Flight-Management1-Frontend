import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleFlightComponent } from './AdminModule/schedule-flight/schedule-flight.component';
import { FormsModule } from '@angular/forms';
import AdminService from './Service/AdminService';
import { HttpClientModule } from '@angular/common/http';
import DemoService from 'src/DemoService';
import UserService from './Service/UserService';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AdminService,DemoService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
