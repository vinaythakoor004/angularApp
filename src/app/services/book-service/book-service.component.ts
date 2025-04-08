import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { serviceDetails } from './model/serviceDetails';
import { BookService } from './service/book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-service',
  imports: [ CommonModule ],
  templateUrl: './book-service.component.html',
  styleUrl: './book-service.component.css',
})
export class BookServiceComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private bookService: BookService = inject(BookService);

  selectesService: serviceDetails = {
    id: 0,
    name: 'default',
    description: 'default',
    price: "0",
    time: 'default',
    servicedescription: 'default',
    contactDetails: 'default',
    image: 'default'
  };

  constructor() { 
  }
  
  ngOnInit(): void {
  this.getServiceDetails();
  }
  
  getServiceDetails(): void {
    this?.activatedRoute?.queryParams?.subscribe((params) => {
      const serviceName = params['name'];
      this.selectesService = this.bookService.getServiceDetailsByName(serviceName);
    });
  }

  checkService(): void {
    // this.bookService.checkService(this.selectesService);
  }
}
