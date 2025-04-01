import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  allUserData: Array<any> = [
    { id: 1,  firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 2, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 3, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 4, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 5, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 6, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 7, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 8, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 9, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 10, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 11, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 12, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 13, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 14, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 15, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 16, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 17, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 18, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 19, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 20, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 21, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 22, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 23, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 24, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 25, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 26, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 27, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 28, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 29, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 30, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 31, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 32, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 33, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 34, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 35, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 36, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 37, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 38, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 39, firstName: "Rohan", lastName: "Datt", handle: "Twiiter" },
    { id: 40, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 41, firstName: "Ajay", lastName: "Patil", handle: "Facebook" },
    { id: 42, firstName: "Satish", lastName: "Kumar", handle: "Twitter" },
    { id: 43, firstName: "Ajay", lastName: "Patil", handle: "Facebook" }
  ];
  userData: Array<any> = [];
  pageSize: Array<number> = [];
  currentPage: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.getPageSize();
    this.getPageData(1);
  }

  getPageSize(): Array<number> {
    let limit = Math.ceil(this.allUserData.length / 10);
    return this.pageSize = [...Array(limit)].map((a, i) => i+1) 
  }

  getPageData(page: number, e?: any, op?: string): Array<any> {
    this.currentPage = page; //op == 'prev' ? page - 1 : op == 'next' ? page + 1 : page;
    if (e) {
      e.preventDefault();
    }
    let start = (page - 1) * 10;
    let end = start + 10;
    const newArr = this.allUserData.slice(start, end); 
    this.userData = structuredClone(newArr);
    console.log(this.userData);
    return this.userData;
  }

  getPageClass(page: number): string {
    return page === 1 ? 'active' : '';
  }

  identify(index: any, item: any) {
    return item.id; 
  }
}
