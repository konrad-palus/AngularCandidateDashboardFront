import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IUserDetails } from '../../DTO/SharedInterfaces/UserDetails-interface';
import { AccountService } from '../../services/user-managment-service.service';
import { ApiResponse } from '../../models/IApiResponse';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  imports: [FormsModule, MatButtonModule,MatIconModule,MatInputModule],
  standalone:true

})
export class UserDetailsComponent implements OnInit {
  userDetails: IUserDetails = {
    name: '',
    lastName: '',
    contactEmail: '',
    phoneNumber: '',
    city: '',
    country: ''
  };

  constructor(
    private accountService: AccountService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    this.accountService.getUserData().subscribe({
      next: (response: ApiResponse<IUserDetails>) => {
        if (response && response.success) {
          this.userDetails = response.data;
          this.cdr.markForCheck(); // Trigger change detection
        }
      },
      error: (error) => {
        console.error('Failed to load user details', error);
      }
    });
  }

  updateUserDetails(): void {
    this.accountService.updateUserData(this.userDetails).subscribe({
      next: (response: ApiResponse<IUserDetails>) => {
        if (response && response.success) {
          this.userDetails = response.data;
          this.cdr.markForCheck(); // Trigger change detection
        }
      },
      error: (error) => {
        console.error('Failed to update user details', error);
      }
    });
  }
}