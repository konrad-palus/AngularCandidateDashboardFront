import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AccountService } from '../services/user-managment-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private accountService: AccountService) {}

  logout() 
  {
    this.accountService.logoutUser();
  }
}
