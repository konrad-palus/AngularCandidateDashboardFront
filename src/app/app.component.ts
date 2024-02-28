import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from './services/user-managment-service.service';
import { Navbar } from "./navbar/navbar.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, RouterLink, Navbar],
    
})
export class AppComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.isLoggedIn$ = this.accountService.getIsLoggedIn();
  }
  
}

