import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees(){
    return[
      {"id":1,"name":"John Doe","Age":23},
      {"id":2,"name":"Sean Murphy","Age":33},
      {"id":3,"name":"Steve Morrison","Age":14},
      {"id":4,"name":"Elena","Age":28},
      {"id":5,"name":"Andrew ","Age": 55},
    ]
  }
  constructor() { }
}
