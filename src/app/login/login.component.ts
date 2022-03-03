import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import user from 'src/User';
import UserRegistration from '../Entity/UserService/UserRegistration';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router){}

  user:user=new user();
  saveUser()
  {
    if(this.user.username=='admin'||this.user.password=='admin')
    {
      console.log("save user method :"+this.user.username);
      console.log("save user method :"+this.user.password);
    this.route.navigate(['/Admin-Home-Page'])
  }
  else{
    this.route.navigate(['/User-Home-Page'])
    
  }
  }




  ngOnInit(): void {
  }

}
