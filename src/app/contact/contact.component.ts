import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  template:'<hr><h2>Employee List</h2><br><ul *ngFor="let employee of Employees"><li> {{employee.name}}</ul>',
  styles: []
})


export class ContactComponent implements OnInit {

  public Employees =[];
    constructor(private _employeeService : EmployeeService){

    }
    ngOnInit(){
this.Employees=this._employeeService.getEmployees();
    }
}
