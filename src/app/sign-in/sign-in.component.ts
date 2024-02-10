import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../models/login.model';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
model: LoginModel = 
{
  login: '',
  password: ''
};

constructor() {}

signIn() {}

}
