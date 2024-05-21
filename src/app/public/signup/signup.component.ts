import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  countries: any;
  steps = 1;
  resgisterform = {
    // profileImage: null as File | null,
    proflleImage: 'dasdasd',
    firstName: 'niss',
    lastName: 'ras',
    email: 'exam45454@222gmail.com',
    password: '565dassfs',
    role: 'admin',
    profession: 'profes',
    desc: 'dewjk nb hd adhga sbdahs dasdh sss',
    gender: 'male',
    companyName: '',
    companyWebsite: '',
    totalEmployees: '',
    companyFoundedIn: '',
    city: '',
    country: '',
    zpCode: '',
    street: '',
  };
  newAr = [{ name: 'one' }, { name: 'tow' }, { name: 'three' }];
  // values: any;

  constructor(private _authService: AuthService) {
    this.FetchCountries();
    this._authService.post(this.resgisterform, '/v1/register/').subscribe({
      next: (res) => {
        console.log('ress', res);
      },
      error: (err) => {
        console.log('my erros', err);
      },
    });
  }
  changeSteps() {
    this.steps++;
  }
  backToPrev() {
    this.steps--;
  }
  getDropdownValue(value: string): string[] | null {
    console.log(value);
    const countryCode = this.countries.filter(
      (country: { name: string }) => country.name === value
    );
    if (countryCode.length === 0) {
      console.log('No country found for selected value.');
      return null; // Or return a default value as needed
    }
    console.log(countryCode);
    this.fetchCities(countryCode[0].cca2Code);
    return countryCode;
    // cca2Code
  }

  FetchCountries() {
    this._authService
      .fetchThirdPartyServices('https://restcountries.com/v3.1/all/')
      .subscribe({
        next: (response) => {
          if (!Array.isArray(response)) {
            return;
          }
          const hasNameProperty = response.every((country) => !!country.name);
          if (!hasNameProperty) {
            return;
          }

          const countryData = response;
          this.countries = response
            .map((country) => ({
              name: country.name.common,
              cca2Code: country.cca2,
            }))
            .sort((countryA, countryB) =>
              countryA.name
                .toLowerCase()[0]
                .localeCompare(countryB.name.toLowerCase()[0])
            );
          console.log(this.countries);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  fetchCities(countryCode: any) {
    this._authService
      .fetchThirdPartyServices(
        `http://api.geonames.org/searchJSON?formatted=true&maxRows=10&username=raja_nisarr&country=${countryCode}`
      )
      .subscribe((response) => {
        console.log(response);
      });
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
