import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService {
  constructor() {}

  handleHttpError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }
}