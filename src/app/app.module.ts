import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './public/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
