import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/evnironment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.baseUrl;

  constructor(private _http: HttpClient , private _router:Router) {}

  userLogin(payload: any) {
    return this._http.post(`${this.url}api/v2/login`, payload);
  }
  // works() {
  //   return this._http.get('http://localhost:8000/api/v2');
  // }
  testapi() {
    return this._http.get(`${this.url}`);
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    console.log(token)
    if (token == null || token == '' || token == undefined ) {
      this._router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
