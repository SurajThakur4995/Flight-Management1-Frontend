import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import userFlightRequest from "../Entity/AdminService/UserFlightRequest";
import FlightResponse from "../Entity/UserService/FlightResponse";
import SearchFlight from "../Entity/UserService/SearchFlight";
import UserRegistration from "../Entity/UserService/UserRegistration";


@Injectable()
export default class UserService{
    constructor(private http:HttpClient){}
   
    bookFlight(flightRequest:any,flightId:number)
    {
        console.log("inside user service"+flightRequest.value);
        console.log("user service"+flightId);
     
        
        return this.http.post("http://localhost:9095/api/v1.0/user/flight/booking/"+flightId,flightRequest,{
            headers:{"content-type":"application/json"}
        })
        
    }

    searchFlight(userFlightRequest:userFlightRequest)
    {
        console.log("inside user service"+userFlightRequest);
        
        return this.http.post("http://localhost:9095/api/v1.0/user/flight/search",userFlightRequest,{
            headers:{"content-type":"application/json"}
        })
    }

    getFlightByEmailId(emailID:string){
        return this.http.get<SearchFlight[]>("http://localhost:9095/api/v1.0/user/flight/booking/history1/"+emailID);
    }

    registerUser(userRegistration:UserRegistration)
    {
        console.log("inside user service"+userRegistration);
        
        return this.http.post("http://localhost:9095/api/v1.0/user/flight/register",userRegistration,{
            headers:{"content-type":"application/json"}
        })
    }
}