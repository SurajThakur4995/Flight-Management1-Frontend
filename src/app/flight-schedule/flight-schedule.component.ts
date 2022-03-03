import { Component, OnInit } from '@angular/core';
import requestFlightDetails from '../Entity/AdminService/RequestFlightDetails';
import AdminService from '../Service/AdminService';

@Component({
  selector: 'app-flight-schedule',
  templateUrl: './flight-schedule.component.html',
  styleUrls: ['./flight-schedule.component.css']
})
export class FlightScheduleComponent implements OnInit {

  constructor(private AdminService:AdminService) { }

  requestFlightDetails:requestFlightDetails=new requestFlightDetails();
  scheduleFlight()
  {
    console.log(this.requestFlightDetails);
    
    const promise=this.AdminService.scheduleFlight(this.requestFlightDetails);
    promise.subscribe(function(response){
      console.log(response);
      alert("Flight added successfully!");
      
    })
  }

  ngOnInit(): void {
  }

}
