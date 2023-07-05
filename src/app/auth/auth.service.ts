import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='http://localhost:8000/api/v2/login'
  constructor(private _http:HttpClient) { }
  

login(userData:any) {
  return this._http.post('http://localhost:8000/api/v2/login' , userData)
}
works(){
  return this._http.get('http://localhost:8000/api/v2')
}

  isLoggedIn(){
    return true
  }

  
}
