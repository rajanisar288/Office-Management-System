import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/evnironment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class AdminServiceService {  
  url = environment.baseUrl
  token = localStorage.getItem('token');

  constructor(private _http:HttpClient) {}

   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });
   sendHeader = { headers: this.headers };

  createProject(payload: any){
    console.log(this.sendHeader)
    return this._http.post(`${this.url}api/v2/create-project` , payload , this.sendHeader)
  }

}
