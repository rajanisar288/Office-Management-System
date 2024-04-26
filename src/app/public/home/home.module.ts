import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { register } from 'swiper/element/bundle';
import { LoginComponent } from '../login/login.component';

register();
@NgModule({
  declarations: [HomeComponent , LoginComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
