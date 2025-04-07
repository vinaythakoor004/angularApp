import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    {
        path: '',
         children: [
            { path: '', redirectTo: '/home', pathMatch: 'full'},
            { path: 'home', component: HomeComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'about', component: AboutComponent }
        ]
    },
];
