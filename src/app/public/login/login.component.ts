import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private  _authService:AuthService){}
 
  ngOnInit() {
    this._authService.works().subscribe(data => console.log(data))
  }

  async login(email:any ,password:any) {
    const obj = await  { email:email.value, password:password.value };
    console.log(obj)

    
  //   this._authService.login(obj).subscribe((data) => {  
  //    console.log(data)
  //     // do something with the data here  c

  // }); 

  try {
    const obj = await  { email:email.value, password:password.value };
    console.log(obj)
    this._authService.login(obj).subscribe((data) => {  
      console.log(data)
       // do something with the data here  c
 
   }); 
    
  } catch (error) {
    console.warn(error);
  }
  }
}
