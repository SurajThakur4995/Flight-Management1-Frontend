import { Component, OnInit } from '@angular/core';
import UserRegistration from '../Entity/UserService/UserRegistration';
import UserService from '../Service/UserService';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private userService:UserService) { }
  userRegitration:UserRegistration=new UserRegistration();

  registerUser(){
    console.log(this.userRegitration);
    
    this.userService.registerUser(this.userRegitration).subscribe();
    // promise.subscribe(function(response){
    //   console.log(response);
      alert("User registered successfully!");
      
    // })
  }

  ngOnInit(): void {
  }

}
