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
    { firstName: "Rohan", lastName: "Datt", handle: "Twiiter" }];
}
