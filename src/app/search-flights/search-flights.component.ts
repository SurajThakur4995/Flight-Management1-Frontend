import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import userFlightRequest from '../Entity/AdminService/UserFlightRequest';
import userFlightResponse from '../Entity/AdminService/UserFlightResponse';
import UserService from '../Service/UserService';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  constructor(private UserService:UserService) { }

  userFlightRequest:userFlightRequest=new userFlightRequest();
  // data!:Observable<userFlightResponse[]>;
  data!:userFlightResponse[];
  searchFlight()
  {
    console.log(this.userFlightRequest);
    
    const promise=this.UserService.searchFlight(this.userFlightRequest);
    this.UserService.searchFlight(this.userFlightRequest).subscribe((values:any)=>{this.data=values})
    console.log(this.data);
    
    // promise.subscribe(function(response){
    //   console.log(response);
      
    // })
  }

  ngOnInit(): void {
  }

}
