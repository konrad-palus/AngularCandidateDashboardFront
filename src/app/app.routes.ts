import { Routes } from '@angular/router';
import { RegisterComponent } from './welcomePage/register/register.component';
import { WelcomeComponent } from './welcomePage/welcome/welcome.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
import { NoAuthGuard } from './auth-guards/no-auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent, canActivate: [NoAuthGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard] },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'employerProfile', component: EmployerProfileComponent },
  { path: 'dashboard', component: DashboardComponent}
];