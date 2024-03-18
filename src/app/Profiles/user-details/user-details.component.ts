import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IUserDetails } from '../../DTO/SharedInterfaces/UserDetails-interface';
import { AccountService } from '../../services/user-managment-service.service';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, MatIconModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  userDetails: IUserDetails = {
    name: undefined,
    lastName: undefined,
    contactEmail: undefined,
    phoneNumber: undefined, 
    city:undefined,
    country:undefined,
   }

   constructor(private accountService: AccountService) {}

   updateUserDetails(): void {
    this.accountService.updateUserData(this.userDetails).subscribe({
      next: (response) => {
        console.log('User details updated successfully', response);
        this.userDetails = response.data; 
      },
      error: (error) => {
        console.error('Failed to update user details', error);
      }
    });
  }
}
