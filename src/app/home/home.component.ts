import { Component, inject } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { CommonModule } from '@angular/common';
import { HomeService } from './service/home.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SearchComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  allUserData: Array<any> = [];
  userData: Array<any> = [];
  pageSize: Array<number> = [];
  currentPage: number = 1;
  readonly dialog = inject(MatDialog);

  constructor(private homeservice: HomeService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.homeservice.fetchUsers().subscribe({
      next: (data) => {
        this.allUserData = data;
        this.getPageSize();
        this.getPageData(1);
      },
      error: (err) => {
        console.log(err)
        this.allUserData = [];
        this.getPageSize();
        this.getPageData(1);
      }
    }
    )
  }

  getPageSize(): Array<number> {
    let limit = Math.ceil(this.allUserData.length / 10);
    return this.pageSize = [...Array(limit)].map((a, i) => i + 1)
  }

  getPageData(page: number, e?: any, pageNoElement?: any): void {
    this.currentPage = page;
    if (e) {
      e.preventDefault();
    }
    let start = (page - 1) * 10;
    let end = start + 10;
    const newArr = this.allUserData.slice(start, end);
    this.userData = structuredClone(newArr);
  }

  getSearch(e: any): void {
    this.allUserData = e.allUserData;
    this.getPageData(1);
    this.getPageSize();
  }

  getPageClass(page: number): string {
    return page === 1 ? 'active' : '';
  }

  identify(index: any, item: any) {
    return item.id;
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, item: any): void {
    this.dialog.open(DialogComponent, {
      data: {
        user: item
      },
      width: '30rem',
      panelClass: 'custom-dialog-container',
      disableClose: true,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
