import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/user-managment-service.service';
import { LoginModel } from '../models/login.model';
import { jwtDecode } from 'jwt-decode';

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

        const token = localStorage.getItem('token'); 
        
        if (token) {

          const decodedToken = jwtDecode(token) as any; 
          const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  
          if (role === 'Employer') {
            this.router.navigate(['employerProfile']);
          } else {
            this.router.navigate(['userProfile']);
          }
        }
      }
    });
  }

  
  signIn() {
    this.accountService.loginUser(this.model).subscribe({
      next: (response) => {
        const token = response.token;
        const decoded = jwtDecode(token) as any; 
        const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  
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