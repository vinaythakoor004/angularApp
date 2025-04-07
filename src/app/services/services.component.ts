import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [ CommonModule ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: Array<any> = [
    { name: 'Deep cleaning', description: 'Thorough cleaning in every nook and cranny of your home.', price: "100$"  },
    { name: 'Furniture Cleaning', description: 'Ensuring your furniture is refreshed, sanitized, and looks as good as new.', price: "150$" },
    { name: 'Kitchen Cleaning', description: 'Leaving your kitchen spotless and hygienic.', price: "300$" },
    { name: 'Move In/Move Out', description: 'Hassle-free cleaning for a smooth transition.', price: "100$" },
    { name: 'Laundry', description: 'Washing, folding and ironing, providing you with neatly pressed clothes.', price: "50$" },
    { name: 'Window Cleaning', description: 'Crystal-clear results, enhancing natural light and a sparkling view.', price: "100$" },
    { name: 'Office Cleaning', description: 'Tailored to maintain a clean workspace, promoting a productive environment.', price: "200$" }
    ]

  constructor() { }
  ngOnInit(): void {

  }

  bookService(service: any): void {
      console.log(`Booking service: ${service.name}`);
  }
}
