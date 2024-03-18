import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AccountService } from '../../services/user-managment-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-photo',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './upload-photo.component.html',
  styleUrl: './upload-photo.component.css'
})

export class UploadPhotoComponent {
  photoUrl: string | null = null;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getPhotoUrl().subscribe({
      next: (response) => {
        if (response.success) {
          this.photoUrl = response.data;
        }
      },
      error: (error) => {
        console.error('Error fetching photo URL', error);
      }
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('photo', file);

      this.accountService.postUserPhoto(file).subscribe({
        next: (response) => {
          if (response.success) {
            this.photoUrl = response.data;
            console.log('Photo uploaded successfully', response);
          }
        },
        error: (error) => {
          console.error('Error uploading photo', error);
        }
      });
    }
  }
}