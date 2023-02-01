import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//import employee module
import { EmployeeModule } from './EmployeeController/Module/employee/employee.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './Login/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './LandingPage/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
   LoginComponent,
   IndexComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
