export default class FlightDetails{
    
    id!:number;
    flightNo!:number;
	airline!:string;
	fromPlace!:string;
    toPlace!:string;
    startDate!:Date;
    endDate!:Date;
    blockedFlight!:boolean;
    scheduledDays!:string;
    instrument!:string;
    noOfBusinessClassSeats!:number;
    noOfNonBusinessClassSeats!:number;
    cost!:number;
}