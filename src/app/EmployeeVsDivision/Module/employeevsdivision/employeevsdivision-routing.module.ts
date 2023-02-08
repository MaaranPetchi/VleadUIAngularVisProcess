import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeevsdivisionindexComponent } from '../../Components/employeevsdivisionindex/employeevsdivisionindex.component';

const routes: Routes = [{ path: 'empvsdivisionindex', component: EmployeevsdivisionindexComponent, data: { title: 'Login Page' } }, ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeevsdivisionRoutingModule { }
