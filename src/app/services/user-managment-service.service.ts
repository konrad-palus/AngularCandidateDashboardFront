import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoginResponse } from '../models/login-response-model';
import { RegisterResponse } from '../models/register-model-response';
import { map } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'https://localhost:7228'; 
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(registrationData: RegisterModel): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/Account/Register`, registrationData);
  }

  loginUser(loginData: LoginModel): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/Account/Login`, loginData).pipe(
      map(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.isLoggedIn.next(true);
        }
        return response;
      })
    );
  }

  logoutUser(): void {
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
    this.router.navigate(['']);
  }

  getIsLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem('token');
    this.isLoggedIn.next(!!token);
    return this.isLoggedIn.asObservable();
  }
}