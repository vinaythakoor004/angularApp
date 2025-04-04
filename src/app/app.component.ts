import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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

  constructor(
    private router: Router, private location: Location
  ) {
    this.currentRoute = "";
    this.currentRoute = this.location.path();
  }

  ngOnInit(): void {
  }

  navigatePage(e: any, routeName: any) {
    this.currentRoute = '/' + routeName;
    console.log(this.currentRoute);
  }
}
