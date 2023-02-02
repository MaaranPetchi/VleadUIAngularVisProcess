import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) { }

  addEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }
  //department dropdown list 
  getdepartmentdropdown(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }
  //Destination dropdown list 
  getdestinationdropdown(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }
  //Destination getreportingManager1dropdown  list 
  getreportingManager1dropdown(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }
  // getreportingLeader1dropdown  list 
  getreportingLeader1dropdown(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }
  //Destination getreportingLeader1dropdown  list 
  getreportingManager2dropdown(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }
  // getreportingLeader1dropdown  list 
  getreportingLeader2dropdown(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }
  // getemployeeHierarchyListdropdown  list 
  getemployeeHierarchyListdropdown(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }
}
