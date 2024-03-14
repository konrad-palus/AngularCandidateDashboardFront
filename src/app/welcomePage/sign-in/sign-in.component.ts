import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/user-managment-service.service';
import { LoginModel } from '../../models/login.model';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model: LoginModel = {
    login: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.accountService.getIsLoggedIn().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        const role = this.accountService.getUserRoleFromToken();
        if (role === 'Employer') {
          this.router.navigate(['employerProfile']);
        } else {
          this.router.navigate(['userProfile']);
        }
      }
    });
  }
  
  signIn() {
    this.accountService.loginUser(this.model).subscribe({
      next: (response) => {
        const token = response.data;
        localStorage.setItem('token', token); 
        const role = this.accountService.getUserRoleFromToken();
    
        console.log('User role:', role); 
    
        if (role === 'Employer') {
          this.router.navigate(['employerProfile']);
        } else {
          this.router.navigate(['userProfile']);
        }
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Login failed: ' + err.message;
      }
    });
  }}