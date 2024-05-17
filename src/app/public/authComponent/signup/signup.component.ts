import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  steps = 1
  resgisterform = {
    profileImage: null as File | null,
    firstName:'nis',
    lastName:'ra',
    email:'exam@222gmail.com',
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
   newAr = [
    {name:'one'},{name:'tow'},{name:'three'}
   ]
   values:any

  constructor(private _authService:AuthService){
    console.log(this.values);
  }
  changeSteps(){
    this.steps++
  }
  backToPrev(){
    this.steps--
  }
  getDropdownValue(value:string){
    this.values = value
  }

  // onFileSelected(event: any): void {
  //   const files = event.target.files;
  //   if (files.length > 0) {
  //     this.resgisterform.profileImage = files[0];
  //   }
  // }

  // register(){

  //   const formData = new FormData();
  //   formData.append('profileImage', this.resgisterform.profileImage || ''); // Ensure it's not null
  //   formData.append('firstName', this.resgisterform.firstName);
  //   formData.append('lastName', this.resgisterform.lastName);
  //   formData.append('email', this.resgisterform.email);
  //   formData.append('password', this.resgisterform.password);
  //   formData.append('role', this.resgisterform.role);
  //   formData.append('profession', this.resgisterform.profession);
  //   formData.append('desc', this.resgisterform.desc);
  //   formData.append('gender', this.resgisterform.gender);
  //   formData.append('companyName', this.resgisterform.companyName);
  //   formData.append('companyWebsite', this.resgisterform.companyWebsite);
  //   formData.append('totalEmployees', this.resgisterform.totalEmployees);
  //   formData.append('companyFoundedIn', this.resgisterform.companyFoundedIn);
  //   formData.append('city', this.resgisterform.city);
  //   formData.append('country', this.resgisterform.country);
  //   formData.append('zpCode', this.resgisterform.zpCode);
  //   formData.append('street', this.resgisterform.street);

  //   this._authService.userRegister(formData).subscribe((res)=>{
  //     console.log(res)
  //   },(error)=>{
  //     console.log(error)
  //   })
    
  // }
}
