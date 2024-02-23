import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordModel } from '../../models/forgot-password.model';

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

  constructor() { }

  resendPaswordReset() {}
}