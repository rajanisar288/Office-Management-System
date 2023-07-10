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

  //Login
  login(email: any , password: any){
    // console.log(email.value, password);
    const userLogin = {
      email : email.value,
      password : password.value
    }
    this._authService.userLogin(userLogin).subscribe((result)=>{
      console.log(result)
      this.user = result
      if(this.user.status == true){
        localStorage.setItem('token', this.user.token)
        localStorage.setItem('userId', this.user.user._id)
        localStorage.setItem('userName', this.user.user.name)
        localStorage.setItem('desc' , this.user.user.description)
        this._router.navigateByUrl('/admin');
      }
    })

  }

}
