import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/evnironment';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { HttpErrorService } from '../shared/services/http-error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.baseUrl;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _HttpErrorService: HttpErrorService
  ) {
    console.log(this.url);
  }

  // User Register
  // userRegister(payload: any) {
  //   return this._http.post(this.url + 'api/v1/register', payload);
  // }
  post(payload: any, route: string): Observable<any> {
    return this._http
      .post(`${this.url}${route}`, payload)
      .pipe(catchError(this._HttpErrorService.handleHttpError));
  }

  fetchThirdPartyServices(url: string): Observable<any> {
    return this._http
      .get(`${url}`)
      .pipe(catchError(this._HttpErrorService.handleHttpError));
  }
}
