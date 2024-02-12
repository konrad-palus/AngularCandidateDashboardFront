// src/app/services/account.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response-model';
import { RegisterResponse } from '../models/register-model-response';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'https://localhost:7228'; 

  constructor(private http: HttpClient) {}

  registerUser(registrationData: RegisterModel): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/Account/Register`, registrationData);
  }

  loginUser(loginData: LoginModel): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/Account/Login`, loginData);
  }
}