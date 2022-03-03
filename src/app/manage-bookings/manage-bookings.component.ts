import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import FlightResponse from '../Entity/UserService/FlightResponse';
import SearchFlight from '../Entity/UserService/SearchFlight';

import UserService from '../Service/UserService';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.css']
})
export class ManageBookingsComponent implements OnInit {

  constructor(private userService:UserService,private location:Location) { }

  // flightResponse!:FlightResponse[];
  fligtRequest:any=this.location.getState();

  searchFlight!:SearchFlight[];
  data!:SearchFlight[];
  getFlightByEmail(emailID:string){

    this.userService.getFlightByEmailId(emailID).subscribe((values:any)=>{this.data=values})
    console.log(this.data);
    // this.AdminService.getAllFlightDetails().subscribe( (data:FlightDetails[])=>
    // this.flightDetails=data)
    // console.log(this.flightDetails);
  }

  ngOnInit(): void {
  }

}
