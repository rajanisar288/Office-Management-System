import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { ReactFormService } from 'src/app/shared/services/react-form.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  LoginForm: FormGroup;
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _reactFormService: ReactFormService
  ) {
    this.LoginForm = this._reactFormService.createReactiveForm({
      email: true,
      password: true,
    });
  }

  ngOnInit() {}

  login() {
    console.log(this.LoginForm.value);
  }
}

//   obj = {
//     email: "dev.m.nisar191@gmail.com",
//     password:"9546167raaji"
// }
