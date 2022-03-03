import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import FlightRequest from '../Entity/UserService/FlightRequest';
import passengerDetails from '../Entity/UserService/PassengerDetails';
import UserService from '../Service/UserService';
// import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  constructor(private UserService: UserService, private location: Location, private _fb: FormBuilder) { }

  emailId!:"";
  flightRequestGroup!: FormGroup;


  ngOnInit(): void {

    this.flightRequestGroup = this._fb.group({

      flightId: [''],
      name: [''],
      emailId: [''],
      passengers: this._fb.array([this.getPassengers()]),
      noOfPassenger: [''],

    })

   
  }
  getPassengers():any
    {
      return this._fb.group({

        id: [''],
        firstName: [''],
        lastName: [''],
        gender: [''],
        age: [''],
        seatNo: [''],
      })
    }

    get getPassengersArray() {
      return <FormArray>this.flightRequestGroup.get('passengers')
    }
  
    addPassenger() {
      this.getPassengersArray.push(this.getPassengers())
    }
  
    removePassenger(index: number) {
      this.getPassengersArray.removeAt(index)
    }













    // passengerDetails: passengerDetails=new passengerDetails();
  flightRequest: FlightRequest = new FlightRequest();
  flightData: any = this.location.getState();

  bookFlight(flightId: number) {
    // console.log(this.flightRequest);
    // console.log(flightId);
    console.log(this.flightRequestGroup.value);
    

    this.flightRequest.flightId = this.flightData.flightId;
    const promise = this.UserService.bookFlight(this.flightRequestGroup.value, flightId);
    promise.subscribe(function (response) {
      console.log(response);

      alert("Your flight has been booked successfully!")
    })
  }




}
