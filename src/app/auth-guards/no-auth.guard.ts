import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from '../services/user-managment-service.service'; 

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.accountService.getIsLoggedIn().pipe(map(isLoggedIn => {
      if (isLoggedIn) {
        this.accountService.logoutUser(); 
        this.router.navigate(['welcome']); 
        return false; 
      }
      return true;
    }));
  }
}