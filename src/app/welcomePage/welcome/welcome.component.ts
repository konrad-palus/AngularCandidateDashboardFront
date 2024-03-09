import { Component } from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component'; 
import { RegisterComponent } from '../register/register.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SignInComponent, RegisterComponent, ForgotPasswordComponent, CommonModule, RouterOutlet, RouterModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'] 
})
export class WelcomeComponent {
}