import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { EmployeeListComponent } from './modules/employees/employee-list/employee-list.component';

export const routes: Routes = [
  {
    path: 'login',
    // redirectTo: '/login',
    // pathMatch: 'full',
    component: LoginComponent,
    // canActivate: [AuthGuard], // Add this to protect routes that require authentication
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'employees',
    loadComponent: () =>
      import('./modules/employees/employee-list/employee-list.component').then(
        (m) => m.EmployeeListComponent
      ),
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'employees',
  //   component: EmployeeListComponent,
  //   canActivate: [AuthGuard],
  // },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
