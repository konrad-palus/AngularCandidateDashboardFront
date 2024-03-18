import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordModel } from '../../models/forgot-password.model';
import { AccountService } from '../../services/user-managment-service.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']  
})
export class ForgotPasswordComponent {
  model: ForgotPasswordModel = 
  {
    email: '',
  };

  constructor(private accountService: AccountService) { }

  resendPaswordReset() {
    this.accountService.forgotPassword(this.model).subscribe({
      next: (response) => {
        console.log('Link was sent', response);
      },
      error: (error) => {
        console.error('Error due sending link', error);
      }
    });
  }
}