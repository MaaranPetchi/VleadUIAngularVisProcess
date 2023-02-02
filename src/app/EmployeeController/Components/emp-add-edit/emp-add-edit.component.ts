import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/Services/EmployeeController/employee.service';
import { CoreService } from 'src/app/Services/EmployeeController/Core/core.service';

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
  bloodGroup: string;
}
//system available  interface
interface System {
  value: string;
  systemavailablevalue: string;
}
//proficiency
interface Proficiency {
  value: string;
  proficiencyValue: string;
}
//Employeeprocess manger 2
interface EmployeeRole {
  value: string;
  employeeroleValue: string;
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
  ReportingManager1List: any;
  ReportingLeader1List: any;
  ReportingManager2List: any;
  ReportingLeader2List: any;
  EmployeeHierarchyList: any;


  //department change event
  ChangeDepartment(e: any) {
    console.log(e.target.value)
  }
  //Destination change event
  ChangeDestination(f: any) {
    console.log(f.target.value)
  }
  //ReportingManager1 change event
  ReportingManager1(g: any) {
    console.log(g.target.value)
  }
  //ReportingLeader1 change event
  ReportingLeader1(h: any) {
    console.log(h.target.value)
  }

  constructor(private builder: FormBuilder, 
    private service: EmployeeService,
     private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
    ) { }
  isLinear = false;
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
  //proficiencys Deropdown values
  proficiencys: Proficiency[] = [
    { value: 'Novice-0', proficiencyValue: 'Novice' },
    { value: 'Beginner-1', proficiencyValue: 'Beginner' },
    { value: 'Proficient-2', proficiencyValue: 'Proficient' },
    { value: 'Expert-2', proficiencyValue: 'Expert' },
    { value: 'Master-2', proficiencyValue: 'Master' },
  ]
  //blood dropdown values
  bloods: BloodGroup[] = [
    { value: 'A+-2', bloodGroup: 'A+' },
    { value: 'A--2', bloodGroup: 'A-' },
    { value: 'B+-2', bloodGroup: 'B+' },
    { value: 'B--2', bloodGroup: 'B-' },
    { value: 'O+-2', bloodGroup: 'O+' },
    { value: 'O--2', bloodGroup: 'O-' },
    { value: 'AB+-2', bloodGroup: 'AB+' },
    { value: 'AB--2', bloodGroup: 'AB-' },
  ];

  //systemavailable dropdown values
  systems: System[] = [
    { value: 'Yes-1', systemavailablevalue: 'Yes' },
    { value: 'No-2', systemavailablevalue: 'No' },
  ];
  //employeeroles
  employeeroles: EmployeeRole[] = [
    {value: 'Account-0', employeeroleValue: 'Account'},
    {value: 'Accounts-1', employeeroleValue: 'Accounts'},
    {value: 'Admin-2', employeeroleValue: 'Admin'},
    {value: 'Artists-3', employeeroleValue: 'Artists'},
    {value: 'Buisness-4', employeeroleValue: 'Buisness'},
    {value: 'Finance-5', employeeroleValue: 'Finance'},
    {value: 'HR-6', employeeroleValue: 'HR'},
    {value: 'MIS-7', employeeroleValue: 'MIS'},
    {value: 'Sales-8', employeeroleValue: 'Sales'},
    {value: 'SalesAdmin-9', employeeroleValue: 'SalesAdmin'},
  ];
  //multiple selection employeeprocess
employeesprocess= new FormControl('');
employeesprocessList:string[]=["Client Coordination",  "Production Allocation", "Production",  "Quality Allocation",   "Quality",  "Proof Reading Allocation", "Proof Reading",  "Buddy Proof", "Sew Proof","Sew Out","Client", "Reports"]

  ngOnInit(): void {
    
    //calling department dropdownlist
    this.service.getdepartmentdropdown().subscribe((data: any) => {
      this.DepartmentList = data;
    })
    //calling Destination dropdownlist
    this.service.getdestinationdropdown().subscribe((data: any) => {
      this.DestinationList = data;
    })
    //calling reportingManager1 dropdownlist
    this.service.getreportingManager1dropdown().subscribe((data: any) => {
      this.ReportingManager1List = data;
    })
    //calling reportingLeader1 dropdownlist
    this.service.getreportingLeader1dropdown().subscribe((data: any) => {
      this.ReportingLeader1List = data;
    })
    //calling reportingManager2 dropdownlist
    this.service.getreportingManager2dropdown().subscribe((data: any) => {
      this.ReportingLeader1List = data;
    })
    //calling reportingLeader2 dropdownlist
    this.service.getreportingLeader2dropdown().subscribe((data: any) => {
      this.ReportingLeader2List = data;
    })
    //calling EmployeeHierarchyList dropdownlist
    this.service.getemployeeHierarchyListdropdown().subscribe((data: any) => {
      this.EmployeeHierarchyList = data;
    })
  }

  empForm = this.builder.group({
    basic: this.builder.group({
      EmployeeCode: this.builder.control('', Validators.required),
      EmployeeName: this.builder.control('', Validators.required),
      Department: this.builder.control('', Validators.required),
      DateofBirth: this.builder.control('', Validators.required),
      DateOfJoining: this.builder.control('', Validators.required),
      Maritalstatus: this.builder.control('', Validators.required),
      DateofResignation: this.builder.control('', Validators.required),
      Gender: this.builder.control('', Validators.required),
      Destination: this.builder.control('', Validators.required),
      BloodGroup: this.builder.control('', Validators.required),
      ResignReasons: this.builder.control('', Validators.required),
      CheckBox: this.builder.control('', Validators.required),
      IsInternetAvailable: this.builder.control('', Validators.required),
      System: this.builder.control('', Validators.required)

    }),
    contact: this.builder.group({
      ReportingManager1:this.builder.control('', Validators.required),
        ReportingManager2:this.builder.control('', Validators.required),
        Proficiency:this.builder.control('', Validators.required),
        ReportingLeader1:this.builder.control('', Validators.required),
        ReportingLeader2:this.builder.control('', Validators.required),
        EmployeeHierarchy:this.builder.control('', Validators.required),
  

    }),
    address: this.builder.group({
      street:this.builder.control('', Validators.required),
      PersonalEmailAddress:this.builder.control('', Validators.required),
      EmployeeRoles:this.builder.control('', Validators.required),
      PresentAddress1:this.builder.control('', Validators.required),
      PresentAddress2:this.builder.control('', Validators.required),
      PresentAddress3:this.builder.control('', Validators.required),
      PermanentAddress1:this.builder.control('', Validators.required),
      PermanentAddress2:this.builder.control('', Validators.required),
      PermanentAddress3:this.builder.control('', Validators.required),
      PhoneNumber:this.builder.control('', Validators.required),
      MobileNumber:this.builder.control('', Validators.required),
      EmergencyContactName:this.builder.control('', Validators.required),
      EmergencyContactNo:this.builder.control('', Validators.required),
      OfficialEmailAddress:this.builder.control('', Validators.required),
      EmployeeProcess:this.builder.control('', Validators.required),
      address:this.builder.control('', Validators.required),
    })
  });

  get Basicform() {
    return this.empForm.get("basic") as FormGroup;
  }
  get contactform() {
    return this.empForm.get("contact") as FormGroup;
  }
  get addressform() {
    return this.empForm.get("address") as FormGroup;
  }
  HandleSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
    }
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this.service
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.service.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

}
