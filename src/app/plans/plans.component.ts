import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  imports: [],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {

  constructor() { }

  ngOnInit(): void {
    console.log("Plans component initialized");
  }

  selectPlan(plan: string): void {

  }
  
}
