import passengerDetails from "./PassengerDetails";

export default class FlightResponse{

    pNR_Number!:number;
    flightId!:number;
    name!:string;
    emailId!:string;
    passengers!:passengerDetails[];
    noOfPassenger!:number;
   
    typeOfMeal!:string;
    
    }