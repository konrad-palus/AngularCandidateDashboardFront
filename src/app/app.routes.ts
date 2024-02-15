import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MainComponentComponent as MainComponent } from './main-component/main-component.component';

export const appRoutes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
//  {path: 'user-profile', component: UserProfileComponent},
  {path: 'main-component', component:MainComponent}
];