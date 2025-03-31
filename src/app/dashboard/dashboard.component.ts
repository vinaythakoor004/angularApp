import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userData: Array<any> = [
    { firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { firstName: "Rohan", lastName: "Datt", handle: "Twiiter" }    
  ];
  pageSize: Array<number> = [];

  ngOninit() {
     
  }

  getPageSize(): Array<number> {
    let limit = Math.ceil(this.userData.length / 10);
    return this.pageSize = [...Array(limit)].map((a, i) => i+1) 
  }
}
