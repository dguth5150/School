import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './shared/employee.service';
import { NavbarService } from '../shared/navbar.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService,public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

}
