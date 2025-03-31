import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
         children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
            { path: 'dashboard', component: DashboardComponent }]
    },
];
