import { Component } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model: RegisterModel = {
    login: '',
    registrationEmail: '',
    password: '',
    isCandidate: false,
    name: '',
    lastName: ''
  };

  constructor() { }

  register() {
  }
}

