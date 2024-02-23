import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AccountService } from '../services/user-managment-service.service';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class Navbar {
  constructor(private accountService: AccountService, private router: Router) {}

  navigateToProfile() {
    const role = this.accountService.getUserRoleFromToken();
    if (role === 'Employer') {
      this.router.navigate(['employerProfile']);
    } else if (role === 'Candidate') {
      this.router.navigate(['userProfile']);
    } else {
    }
  }

  logout() {
    this.accountService.logoutUser();
  }

  navigateToDashboard() {
    this.router.navigate(['dashboard']);
  }

}