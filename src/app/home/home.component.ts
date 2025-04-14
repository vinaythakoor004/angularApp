import { Component, inject } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { CommonModule } from '@angular/common';
import { HomeService } from './service/home.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { bookingData } from './model/bookingData';
import { ChildActivationEnd, ChildActivationStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RoutesRecognized } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  imports: [CommonModule, SearchComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  allBookingData: Array<bookingData> = [];
  bookingData: Array<bookingData> = [];
  pageSize: Array<number> = [];
  currentPage: number = 1;
  readonly dialog = inject(MatDialog);
  private readonly router = inject(Router);
  subscriptions: Subscription | undefined;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getServiceData();
    // this.subscriptions = this.homeService.bookingFormSubmitSubject.subscribe((data: Array<bookingData>) => {
    //   console.log(data);
    //   if (data.length > 0) { 
    //     this.allBookingData = data;
    //     this.getPageSize();
    //     this.getPageData(1);
    //   }
    // })
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }

  getServiceData(): void {
    this.homeService.getServiceData().subscribe({
      next: (data) => {
        this.allBookingData = data;
        this.getPageSize();
        this.getPageData(1);
      },
      error: (err) => {
        console.log(err)
        this.allBookingData = [];
        this.getPageSize();
        this.getPageData(1);
      }
    }
    )
  }

  getPageSize(): Array<number> {
    let limit = Math.ceil(this.allBookingData.length / 10);
    return this.pageSize = [...Array(limit)].map((a, i) => i + 1)
  }

  getPageData(page: number, e?: any, pageNoElement?: any): void {
    this.currentPage = page;
    if (e) {
      e.preventDefault();
    }
    let start = (page - 1) * 10;
    let end = start + 10;
    const newArr = this.allBookingData.slice(start, end);
    this.bookingData = structuredClone(newArr);
  }

  getSearch(e: any): void {
    this.allBookingData = e.allBookingData;
    this.getPageData(1);
    this.getPageSize();
  }

  getPageClass(page: number): string {
    return page === 1 ? 'active' : '';
  }

  identify(index: any, item: any) {
    return item.id;
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, item: bookingData): void {
    this.dialog.open(DialogComponent, {
      data: {
        bookingData: item
      },
      width: '40rem',
      panelClass: 'custom-dialog-container',
      disableClose: true,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  deleteRow(item: bookingData): void {
    this.allBookingData = this.allBookingData.filter((data) => data.id !== item.id);
    this.currentPage = this.bookingData.length == 1 && this.bookingData[0].id == item.id && this.currentPage != 1 ? this.currentPage - 1 : this.currentPage;
    this.getPageSize();
    this.getPageData(this.currentPage);
   }
}
