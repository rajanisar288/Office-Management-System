import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ReactFormService {
  constructor() {}

  createReactiveForm(data: { [key: string]: boolean }): FormGroup {
    const formGroupConfig: { [key: string]: FormControl } = {};
    for (const key in data) {
      if (data.hasOwnProperty(key) && data[key]) {
        if (key === 'email') {
          formGroupConfig[key] = new FormControl('', Validators.email);
        } else {
          formGroupConfig[key] = new FormControl('');
        }
      }
    }

    return new FormGroup(formGroupConfig);
  }
}

// method to call react service in any Component  **?

// myForm:FormGroup
// constructor(private _formServiceService:FormServiceService){
//   this.myForm = this._formServiceService.createReactiveForm({
//     email:true,
//     name:true
//   });
// }
