import { Component, OnInit } from '@angular/core';

import { EmployeeService }  from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';
import { NavbarService } from '../../shared/navbar.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService,public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.employeeService.getEmployeeList();
  }

  showForEdit(emp: Employee){
    this.employeeService.selectedEmployee = Object.assign({}, emp);;
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this record?') == true){
    this.employeeService.deleteEmployee(id)
      .subscribe(x => {
        this.employeeService.getEmployeeList();
        this.toastr.warning("Record Deleted");
      })
    }
  }
}