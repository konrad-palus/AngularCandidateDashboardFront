import { Component } from '@angular/core';
import { SignInComponent } from '../../app/sign-in/sign-in.component'; 
import { RegisterComponent } from '../../app/register/register.component';
import { ForgotPasswordComponent } from '../../app/forgot-password/forgot-password.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SignInComponent, RegisterComponent, ForgotPasswordComponent, CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'] 
})
export class WelcomeComponent {
  currentForm: 'sign' | 'register' | 'forgot' | null = null;

  showForm(form: 'sign' | 'register' | 'forgot' | null) {
    this.currentForm = form;
  }
}