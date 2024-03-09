import { Routes } from '@angular/router';
import { RegisterComponent } from './welcomePage/register/register.component';
import { WelcomeComponent } from './welcomePage/welcome/welcome.component';
import { EmployerProfileComponent } from './Profiles/employer-profile/employer-profile.component';
import { NoAuthGuard } from './auth-guards/no-auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './Profiles/candidate-profile/user-profile.component';
import { ForgotPasswordComponent } from './welcomePage/forgot-password/forgot-password.component';
import { SignInComponent } from './welcomePage/sign-in/sign-in.component';
import { ResetPasswordComponent } from './welcomePage/reset-password/reset-password.component';

export const appRoutes: Routes = [
  {  path: 'welcome', 
  component: WelcomeComponent, 
  canActivate: [NoAuthGuard],
  children: [
    { path: 'sign-in', component: SignInComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent},
    { path: '', redirectTo: 'sign-in', pathMatch: 'full' } 
  ]},
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'employerProfile', component: EmployerProfileComponent },
  { path: 'dashboard', component: DashboardComponent}
];