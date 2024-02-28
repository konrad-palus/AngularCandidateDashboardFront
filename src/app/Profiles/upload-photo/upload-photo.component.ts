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
  imagePreview: string | ArrayBuffer | null = null;
  photoUrl: string | null = null; 

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getPhotoUrl().subscribe({
      next: (data) => {
        if (data.photoUrl) {
          this.photoUrl = data.photoUrl;
        }
      },
      error: (error) => {
        console.warn('No photo URL returned or error fetching photo URL', error);
      }
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.accountService.postUserPhoto(file).subscribe({
        next: (response) => {
          this.photoUrl = response.photoUrl;
          console.log('Photo uploaded successfully', response);
        },
        error: (error) => {
          console.error('Error uploading photo', error);
        }
      });
    }
  }}