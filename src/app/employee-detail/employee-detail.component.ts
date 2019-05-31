import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-employee-detail',
  template: '<hr><h2>Employee List</h2><br><ul *ngFor="let employee of Employees"><li>{{employee.id}}  {{employee.name}}  {{employee.Age}}</ul>',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public Employees =[];
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this.Employees= this._employeeService.getEmployees();
  }

}
