import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
import { NoAuthGuard } from './auth-guards/no-auth.guard';

export const appRoutes: Routes = [
  {path: 'welcome', component: WelcomeComponent, canActivate: [NoAuthGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard] },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'employerProfile', component: EmployerProfileComponent }
];