import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { UploadPhotoComponent } from '../upload-photo/upload-photo.component';
@Component({
  selector: 'app-employer-profile',
  standalone: true,
  imports: [
    MatButtonModule,  UploadPhotoComponent ], 
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css'] 
})
export class EmployerProfileComponent {
}