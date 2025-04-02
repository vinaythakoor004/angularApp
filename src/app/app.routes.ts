import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    {
        path: '',
         children: [
            { path: '', redirectTo: '/home', pathMatch: 'full'},
            { path: 'home', component: HomeComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: 'about', component: AboutComponent },
        ]
    },
];
