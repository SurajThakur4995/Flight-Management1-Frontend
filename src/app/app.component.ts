import { Component } from '@angular/core';
import { Router } from '@angular/router';
import DemoService from 'src/DemoService';
import user from 'src/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-management-system';

  constructor(private DemoService:DemoService,private route:Router){}

  user:user=new user();
  saveUser()
  {
  

    

  }
}
