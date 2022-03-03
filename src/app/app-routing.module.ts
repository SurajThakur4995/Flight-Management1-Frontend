import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManageAirlinesComponent } from './manage-airlines/manage-airlines.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  { path: 'flight-schedule', loadChildren: () => import('./flight-schedule/flight-schedule.module').then(m => m.FlightScheduleModule) }, 
{ path: 'manage-airlines', loadChildren: () => import('./manage-airlines/manage-airlines.module').then(m => m.ManageAirlinesModule) },
{ path: 'book-flight', loadChildren: () => import('./book-flight/book-flight.module').then(m => m.BookFlightModule) },
{ path: 'search-flights', loadChildren: () => import('./search-flights/search-flights.module').then(m => m.SearchFlightsModule) },
{ path: 'manage-bookings', loadChildren: () => import('./manage-bookings/manage-bookings.module').then(m => m.ManageBookingsModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'Admin-Home-Page', loadChildren: () => import('./admin-home-page/admin-home-page.module').then(m => m.AdminHomePageModule) },
  { path: 'User-Home-Page', loadChildren: () => import('./user-home-page/user-home-page.module').then(m => m.UserHomePageModule) },
  { path: 'User-Registration', loadChildren: () => import('./user-registration/user-registration.module').then(m => m.UserRegistrationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
