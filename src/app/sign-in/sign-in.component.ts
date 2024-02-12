import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/user-managment-service.service';
import { LoginModel } from '../models/login.model';

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
    if (localStorage.getItem('token')) {
      this.router.navigate(['']);
    }
  }

  signIn() {
    this.accountService.loginUser(this.model).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['']); 
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'login failed ' + err;
      }
    });
  }
}