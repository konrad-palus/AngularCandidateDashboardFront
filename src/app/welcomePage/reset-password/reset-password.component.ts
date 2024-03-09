import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordRequestModel } from '../../models/reset-password.model';
import { AccountService } from '../../services/user-managment-service.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatCardModule, CommonModule]
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!: FormGroup; 
  email: string | null = ''; 
  token: string | null = ''; 

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.queryParamMap.get('email'); 
    this.token = this.route.snapshot.queryParamMap.get('token'); 

    this.resetPasswordForm = this.fb.group({
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup): { [key: string]: boolean } | null {
    if (formGroup.get('newPassword')?.value !== formGroup.get('confirmNewPassword')?.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid && this.email && this.token) {
      const resetPasswordData: ResetPasswordRequestModel = {
        password: this.resetPasswordForm.get('newPassword')?.value,
        confirmPassword: this.resetPasswordForm.get('confirmNewPassword')?.value,
      };
  
      this.accountService.resetPassword(resetPasswordData, this.email, this.token).subscribe({
        next: (response) => console.log('Password changed successfully:', response),
        error: (error) => console.error('Error changing password:', error)
      });
    }
  }
}