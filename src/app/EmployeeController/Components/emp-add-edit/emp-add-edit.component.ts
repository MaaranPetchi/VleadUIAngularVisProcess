import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms"
import { EmployeeService } from 'src/app/Services/EmployeeController/employee.service';


//gender interface
interface Gender {
  value: string;
  gendervalue: string;
}
//internetavailable group interface
interface internet {
  value: string;
  internetavailablevalue: string;
}
//marital available  interface
interface Martial {
  value: string;
  martialvalue: string;
}

//Resignation   interface
interface Resignation {
  value: string;
  Resignationvalue: string;
}
//blood group interface
interface BloodGroup {
  value: string;
  bloodGroup : string;
}
//system available  interface
interface System {
  value: string;
  systemavailablevalue : string;
}
@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {

  //Declaring list
  DepartmentList: any;
  DestinationList: any;
  //department change event
  ChangeDepartment(e: any) {
    console.log(e.target.value)
  }
  //Destination change event
  ChangeDestination(f: any) {
    console.log(f.target.value)
  }

  constructor(private builder: FormBuilder, private service: EmployeeService) { }
  isLinear = true;
  //gender dropdown values
  genders: Gender[] = [
    { value: 'Male-1', gendervalue: 'Male' },
    { value: 'Female-2', gendervalue: 'Female' },
  ];
  //internet dropdown values
  internets: internet[] = [
    { value: 'Yes-1', internetavailablevalue: 'Yes' },
    { value: 'No-2', internetavailablevalue: 'No' },
  ];
  //martials dropdown values
  martials: Martial[] = [
    { value: 'Single-1', martialvalue: 'Single' },
    { value: 'Married-2', martialvalue: 'Married' },
  ];
  //Resignation dropdown values
  resignations: Resignation[] = [
    { value: 'HealthProblem-1', Resignationvalue: 'HealthProblem' },
    { value: 'PersonalProblem-2', Resignationvalue: 'PersonalProblem' },
    { value: 'BetterOffer-3', Resignationvalue: 'BetterOffer' },
  ];
  //blood dropdown values
 bloods: BloodGroup[] = [
  {value: 'A+-2', bloodGroup: 'A+'},
  {value: 'A--2', bloodGroup: 'A-'},
  {value: 'B+-2', bloodGroup: 'B+'},
  {value: 'B--2', bloodGroup: 'B-'},
  {value: 'O+-2', bloodGroup: 'O+'},
  {value: 'O--2', bloodGroup: 'O-'},
  {value: 'AB+-2', bloodGroup: 'AB+'},
  {value: 'AB--2', bloodGroup: 'AB-'},
  ];
  //systemavailable dropdown values
 systems: System[] = [
  {value: 'Yes-1', systemavailablevalue: 'Yes'},
  {value: 'No-2', systemavailablevalue: 'No'},
  ];
  ngOnInit(): void {
    //calling department dropdownlist
    this.service.getdepartmentdropdown().subscribe((data: any) => {
      this.DepartmentList = data;
    })
    //calling Destination dropdownlist
    this.service.getdestinationdropdown().subscribe((data: any) => {
      this.DestinationList = data;
    })
  }

  Empregister = this.builder.group({
    basic: this.builder.group({
      TRADMIN: this.builder.control('', Validators.required),
      Department: this.builder.control('', Validators.required)

    }),
    contact: this.builder.group({
      email: this.builder.control('', Validators.required),
      phone: this.builder.control('', Validators.required),
      fax: this.builder.control('', Validators.required)

    }),
    address: this.builder.group({
      street: this.builder.control('', Validators.required),
      city: this.builder.control('', Validators.required),
      pin: this.builder.control('', Validators.required)
    })
  });

  get Basicform() {
    return this.Empregister.get("basic") as FormGroup;
  }
  get contactform() {
    return this.Empregister.get("contact") as FormGroup;
  }
  get addressform() {
    return this.Empregister.get("address") as FormGroup;
  }
  HandleSubmit() {
    if (this.Empregister.valid) {
      console.log(this.Empregister.value);
    }
  }

}
