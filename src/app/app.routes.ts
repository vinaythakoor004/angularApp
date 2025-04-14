import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { BookServiceComponent } from './services/book-service/book-service.component';
import { BookAppointmentComponent } from './services/book-service/book-appointment/book-appointment/book-appointment.component';
import { PlansComponent } from './plans/plans.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'services',
        children: [
          { path: '', component: ServicesComponent },
          {
            path: 'book-service',
            children: [
              {
                path: '',
                component: BookServiceComponent,
              },
              {
                path: 'appointment',
                component: BookAppointmentComponent,
              },
            ],
          },
        ],
      },
      { path: 'plans', component: PlansComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
];
