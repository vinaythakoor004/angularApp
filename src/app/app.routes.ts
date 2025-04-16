import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { BookServiceComponent } from './services/book-service/book-service.component';
import { BookAppointmentComponent } from './services/book-service/book-appointment/book-appointment/book-appointment.component';
import { PlansComponent } from './plans/plans.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './common/service/route-guard/route-guard.service';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate: [RouteGuardService] },
      {
        path: 'services', canActivate: [RouteGuardService],
        children: [
          { path: '', component: ServicesComponent },
          {
            path: 'book-service', canActivate: [RouteGuardService],
            children: [
              {
                path: '', canActivate: [RouteGuardService],
                component: BookServiceComponent,
              },
              {
                path: 'appointment', canActivate: [RouteGuardService],
                component: BookAppointmentComponent,
              },
            ],
          },
        ],
      },
      { path: 'plans', component: PlansComponent, canActivate: [RouteGuardService] },
      { path: 'contact', component: ContactComponent, canActivate: [RouteGuardService] },
      { path: 'about', component: AboutComponent, canActivate: [RouteGuardService] },
      { path: 'login', component: LoginComponent },
    ],
  },
];
