import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import requestFlightDetails from "../Entity/AdminService/RequestFlightDetails";
import FlightDetails from "../Entity/AdminService/FlightDetails";


@Injectable()
export default class AdminService{
    constructor(private http:HttpClient){}
    scheduleFlight(requestFlightDetails:requestFlightDetails)
    {
        console.log("inside admin service"+requestFlightDetails);
        return this.http.post("http://localhost:9094/api/v1.0/admin/flight/airline/inventory/add",requestFlightDetails,{
            headers:{"content-type":"application/json"}
        })
        
    }


    getAllFlightDetails()
    {
        return this.http.get<FlightDetails[]>("http://localhost:9094/api/v1.0/admin/flight/getAirline");
    }

    blockAirline(airline:string)
    {
        console.log("Admin serive"+airline);
        
        
        return this.http.get<FlightDetails[]>("http://localhost:9094/api/v1.0/admin/flight/airline/inventory/block/"+airline);
    }

    unblockAirline(airline:string)
    {
        console.log("Admin serive"+airline);
        
        return this.http.get<FlightDetails[]>("http://localhost:9094/api/v1.0/admin/flight/airline/inventory/unblock/"+airline);
    }
}