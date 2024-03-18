import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UploadPhotoComponent } from '../upload-photo/upload-photo.component';
import { EmployerCompanyDetailsComponent } from '../employerDetails/employer-company-details/employer-company-details.component';
import { UploadUserDetailsComponent } from '../upload-user-details/upload-user-details.component';
@Component({
  selector: 'app-employer-profile',
  standalone: true,
  imports: [
    MatButtonModule,  UploadPhotoComponent, EmployerCompanyDetailsComponent, UploadUserDetailsComponent], 
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css'] 
})
export class EmployerProfileComponent {
}