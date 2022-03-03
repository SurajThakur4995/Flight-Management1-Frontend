import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import user from "./User";

@Injectable()
export default class DemoService{
    constructor(private http:HttpClient){}
    save(user:user)
    {
        // console.log("Demo service"+user.name);
        // return this.http.post("http://localhost:8000/users",user,{
        //     headers:{"content-type":"application/json"}
        // })
    }
}