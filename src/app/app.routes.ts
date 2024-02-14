import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const appRoutes: Routes = [
    {path: 'welcome', component: WelcomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {path: 'user-profile', component: UserProfileComponent}
];