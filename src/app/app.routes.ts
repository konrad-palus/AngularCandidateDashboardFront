import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Routes = [
    {path: 'welcome', component: WelcomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];