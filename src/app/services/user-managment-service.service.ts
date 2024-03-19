import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';
import { Observable, BehaviorSubject, catchError, throwError } from 'rxjs';
import { RegisterResponse } from '../models/register-model-response';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { Candidate } from '../DTO/CandidateInterfaces/Candidate-interface';
import { jwtDecode } from 'jwt-decode';
import { EmployerDetalis } from '../DTO/EmployerInterfaces/employer-detalis';
import { IUserDetails } from '../DTO/SharedInterfaces/UserDetails-interface';
import { ForgotPasswordModel } from '../models/forgot-password.model';
import { ResetPasswordRequestModel } from '../models/reset-password.model';
import { ApiResponse } from '../models/IApiResponse';
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

  loginUser(loginData: LoginModel): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${this.apiUrl}/Account/Login`, loginData).pipe(
      map(response => {
        if (response.success && response.data) {
          localStorage.setItem('token', response.data);
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

  getUserData(): Observable<ApiResponse<IUserDetails>> {
    return this.http.get<ApiResponse<IUserDetails>>(`${this.apiUrl}/User/GetUserData`);
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

  postUserPhoto(photo: File): Observable<ApiResponse<any>> {
    const formData = new FormData();
    formData.append('photo', photo);
    return this.http.post<ApiResponse<any>>(`${this.apiUrl}/User/UploadPhoto`, formData);
  }

getPhotoUrl(): Observable<ApiResponse<any>> {
  return this.http.get<ApiResponse<any>>(`${this.apiUrl}/User/GetPhoto`);
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

updateUserData(userData: IUserDetails): Observable<ApiResponse<IUserDetails>> {
  return this.http.post<ApiResponse<IUserDetails>>(`${this.apiUrl}/User/UpdateUserDetails`, userData).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error updating user details', error);
      return throwError(() => new Error('Failed to update user details'));
    })
  );
}

 resetPassword(data: ResetPasswordRequestModel, email: string, token: string): Observable<any> {
  const url = `${this.apiUrl}/Account/ResetPassword?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`;
  return this.http.post(url, data);
}

}



