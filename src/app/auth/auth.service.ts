import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/evnironment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.baseUrl; //http://localhost:4402/

  constructor(private _http: HttpClient , private _router:Router) {}

  // User Register
  userRegister(payload:any){
    return this._http.post(this.url+'api/v1/register', payload)
  }


}
