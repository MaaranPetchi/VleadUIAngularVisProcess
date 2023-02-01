import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './LandingPage/index/index.component';
import { LoginComponent } from './Login/login/login.component';


export const routes: Routes = [ 
  { path: '', redirectTo: 'login', pathMatch: 'full', }, 
  { path: 'login', component: LoginComponent, data: { title: 'Login Page' } }, 
  { path: 'index', component: IndexComponent, data: { title: 'Login Page' } }, 
 

]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
