import { Component, OnInit } from '@angular/core';
import FlightDetails from '../Entity/AdminService/FlightDetails';
import AdminService from '../Service/AdminService';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.css']
})
export class ManageAirlinesComponent implements OnInit {

  constructor(private AdminService:AdminService) { }

  

  block(airline:string)
  {
      console.log(airline);

      const promise=this.AdminService.blockAirline(airline);
      window.location.reload();
      promise.subscribe(function(response){
        console.log(response);
        window.location.reload();
      })
      
  }


  unblock(airline:string)
  {
      console.log(airline);

      const promise=this.AdminService.unblockAirline(airline);
      window.location.reload();
      promise.subscribe(function(response){
        console.log(response);
        window.location.reload();
      })
      
  }
  
  flightDetails!:FlightDetails[];
  ngOnInit(): void {

 
  // getAllFlightDetails()
  // {
    this.AdminService.getAllFlightDetails().subscribe( (data:FlightDetails[])=>
    this.flightDetails=data)
    console.log(this.flightDetails);
   
  // }
  }

}
