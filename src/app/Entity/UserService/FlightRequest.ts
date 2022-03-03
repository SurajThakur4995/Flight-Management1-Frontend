import passengerDetails from "./PassengerDetails";




export default class FlightRequest{

    
    flightId!:number;
    name!:string;
    emailId!:string;
    passengers!:passengerDetails[];
    noOfPassenger!:number;
   
    typeOfMeal!:string;
    
    }