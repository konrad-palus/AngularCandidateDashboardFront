import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employer-profile',
  standalone: true,
  imports: [MatButtonModule], 
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css'] 
})
export class EmployerProfileComponent {
  imagePreview: string | ArrayBuffer | null = null;

  onFileSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let file: File | null = element.files ? element.files[0] : null;

    if (file) {
      console.log(file); 
      
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result; 
      };
      reader.readAsDataURL(file); 
    }
  }
}