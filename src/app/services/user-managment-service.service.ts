// src/app/services/account.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'https://localhost:7228'; 

  constructor(private http: HttpClient) {}

  registerUser(registrationData: RegisterModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Account/Register`, registrationData);
  }

  loginUser(loginData: LoginModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Account/Login`, loginData);
  }
}