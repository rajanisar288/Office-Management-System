import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: any 
  obj = {
    email: "dev.m.nisar191@gmail.com",
    password:"9546167raaji"
}
  constructor(private  _authService:AuthService , private _router:Router){}
 
  ngOnInit() {
  }


}
