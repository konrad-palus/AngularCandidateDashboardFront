import { Component } from '@angular/core';
import { RegisterModel } from '../../models/register.model';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../services/user-managment-service.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: RegisterModel = {
    userName: '',
    registrationEmail: '',
    password: '',
    isCandidate: false,
    name: '',
    lastName: ''
  };

  
  constructor(private accountService: AccountService) { }

  register() {
    this.accountService.registerUser(this.model).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }
}

