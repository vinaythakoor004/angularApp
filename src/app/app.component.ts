import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonService } from './common/service/common/common.service';
import { PopupService } from './common/service/popup/popup.service';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp';
  routeName: string = "home"; 
  currentRoute: string = "";
  isLoggedUserIn: boolean = false

  constructor(
    private router: Router, private location: Location, private commonService: CommonService, private popupService: PopupService
  ) {
    this.currentRoute = "";
    this.currentRoute = this.location.path();
    this.isLoggedUserIn = this.commonService.isLoggedIn;
  }

  ngOnInit(): void {
  }

  navigatePage(e: any, routeName: any) {
    this.currentRoute = '/' + routeName;
  }

  isLoggedIn(): boolean {
    return this.commonService.isLoggedIn;
  }

  openAccountPopup(): void {
    const data = {
    }
    this.popupService.openDialog(data, '40rem', 'account-dialog-container');
  
  }
 
}
