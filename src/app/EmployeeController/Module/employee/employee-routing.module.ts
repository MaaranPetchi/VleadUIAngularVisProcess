import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpAddEditComponent } from '../../Components/emp-add-edit/emp-add-edit.component';
import { IndexemployeeComponent } from '../../Components/indexemployee/indexemployee.component';

const routes: Routes = [ { path: '', redirectTo: 'login', pathMatch: 'full', }, 
{ path: 'addedit', component: EmpAddEditComponent, data: { title: 'Login Page' } }, 
{ path: 'indexemp', component: IndexemployeeComponent, data: { title: 'Login Page' } }, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
