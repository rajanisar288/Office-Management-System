import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  steps = 1
  formData = {
    profileImage: null as File | null,
    firstName:'nis',
    lastName:'ra',
    email:'exam@gmail.com',
    password:'565dafs',
    role:'admin',
    profession:'profes',
    desc:'dewjk nb hd adhga sbdahs dasdh ',
    gender:"male",
    companyName:'',
    companyWebsite:"",
    totalEmployees:"",
    companyFoundedIn:'',
    city:'',
    country:"",
    zpCode:"",
    street:"",
  };
  payload = {
  // firstName:'nis',
  // lastName:'ra',
  // email:'exam@gmail.com',
  // password:'565dafs',
  // role:'admin',
  // profession:'profes',
  // desc:'dewjk nb hd adhga sbdahs dasdh ',
  // gender:"male",
  // companyName:'',
  // companyWebsite:"",
  // totalEmployees:"",
  // companyFoundedIn:'',
  // city:'',
  // country:"",
  // zpCode:"",
  // street:"",
  }

  constructor(private _authService:AuthService){}
  changeSteps(){
    this.steps++
  }
  backToPrev(){
    this.steps--
  }

  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files.length > 0) {
      this.formData.profileImage = files[0];
    }
  }

  register(){

    const formData = new FormData();
    // formData.append('name', this.formData.name);
  
    // Append each field to the FormData instance
    formData.append('profileImage', this.formData.profileImage || ''); // Ensure it's not null
    formData.append('firstName', this.formData.firstName);
    formData.append('lastName', this.formData.lastName);
    formData.append('email', this.formData.email);
    formData.append('password', this.formData.password);
    formData.append('role', this.formData.role);
    formData.append('profession', this.formData.profession);
    formData.append('desc', this.formData.desc);
    formData.append('gender', this.formData.gender);
    formData.append('companyName', this.formData.companyName);
    formData.append('companyWebsite', this.formData.companyWebsite);
    formData.append('totalEmployees', this.formData.totalEmployees);
    formData.append('companyFoundedIn', this.formData.companyFoundedIn);
    formData.append('city', this.formData.city);
    formData.append('country', this.formData.country);
    formData.append('zpCode', this.formData.zpCode);
    formData.append('street', this.formData.street);

    this._authService.userRegister(formData).subscribe((res)=>{
      console.log(res)
    },(error)=>{
      console.log(error)
    })
    
  }
}
