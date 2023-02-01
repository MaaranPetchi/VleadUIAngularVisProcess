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

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit {
  DepartmentList: any;
  //department change event
  ChangeDepartment(e: any) {
    console.log(e.target.value)
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
  ngOnInit(): void {
    //calling department dropdownlist
    this.service.getdepartmentdropdown().subscribe((data: any) => {
      this.DepartmentList = data;
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
