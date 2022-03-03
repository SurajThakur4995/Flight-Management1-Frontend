import { Component, OnInit } from '@angular/core';
import FlightDetails from 'src/app/Entity/AdminService/FlightDetails';
import requestFlightDetails from 'src/app/Entity/AdminService/RequestFlightDetails';

import AdminService from 'src/app/Service/AdminService';

@Component({
  selector: 'app-schedule-flight',
  templateUrl: './schedule-flight.component.html',
  styleUrls: ['./schedule-flight.component.css']
})
export class ScheduleFlightComponent implements OnInit {

  constructor(private AdminService:AdminService) { }

  requestFlightDetails:requestFlightDetails=new requestFlightDetails();
  scheduleFlight()
  {
    console.log(this.requestFlightDetails);
    
    const promise=this.AdminService.scheduleFlight(this.requestFlightDetails);
    promise.subscribe(function(response){
      console.log(response);
      
    })
  }

  flightDetails!:FlightDetails[];
  getAllFlightDetails()
  {
    this.AdminService.getAllFlightDetails().subscribe( (data:FlightDetails[])=>
    this.flightDetails=data)
    console.log(this.flightDetails);
    
  }

  ngOnInit(): void {
  }

}
