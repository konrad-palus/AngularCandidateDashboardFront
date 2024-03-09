import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoginResponse } from '../models/login-response-model';
import { RegisterResponse } from '../models/register-model-response';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { Candidate } from '../DTO/CandidateInterfaces/Candidate-interface';
import { jwtDecode } from 'jwt-decode';
import { EmployerDetalis } from '../DTO/EmployerInterfaces/employer-detalis';
import { IUserDetails } from '../DTO/SharedInterfaces/UserDetails-interface';
import { ForgotPasswordModel } from '../models/forgot-password.model';

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

  forgotPassword(forgotPassword: ForgotPasswordModel) 
  {
    return this.http.post<ForgotPasswordModel>(`${this.apiUrl}/Account/ForgotPassword`, forgotPassword);
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

  getUserData(): Observable<Candidate> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Candidate>(`${this.apiUrl}/Account/GetUserData`, { headers: headers });
  }


  getUserRoleFromToken(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const decodedToken = jwtDecode(token) as any;
      return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || null;
    } catch (error) {
      console.error('Error decoding token', error);
      return null;
    }
  }

  postUserPhoto(photo: File): Observable<any> {
    const formData = new FormData();
    formData.append('photo', photo);
    return this.http.post(`${this.apiUrl}/User/upload-photo`, formData);
}

getPhotoUrl(): Observable<{ photoUrl: string }> {
  return this.http.get<{ photoUrl: string }>(`${this.apiUrl}/User/get-photo`, {
  });
}

updateCompanyName(companyName: string): Observable<any> {
  const payload: EmployerDetalis = { companyName };
  return this.http.post(`${this.apiUrl}/Employer/UpdateCompanyName`, payload);
}

updateCompanyDescription(companyDescription: string): Observable<any> {
  const payload: EmployerDetalis = { companyDescription };
  return this.http.post(`${this.apiUrl}/Employer/UpdateCompanyDescription`, payload);
}

getCompanyName(): Observable<any> {
  return this.http.get<{CompanyName: string}>(`${this.apiUrl}/Employer/GetCompanyName`);
}

getCompanyDescription(): Observable<any> {
  return this.http.get<{CompanyDescription: string}>(`${this.apiUrl}/Employer/GetCompanyDescription`);
}

generateAndUpdateCompanyDescription(): Observable<any> {
  return this.http.get<{CompanyDescription: string}>(`${this.apiUrl}/Employer/GenerateAndUpdateCompanyDescription`);
}

updateUserData(userData: IUserDetails): Observable<any> {
  return this.http.post(`${this.apiUrl}/User/UpdateUserDetails`, userData);
}

public ResetPassword(data: ResetPasswordRequestModel, email: string, token: string): Observable<any> {
  const url = `${this.apiUrl}/User/ResetPassword?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`;
  return this.http.post(url, data);
}
}

