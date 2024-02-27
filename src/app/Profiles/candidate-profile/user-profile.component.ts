import { Component } from '@angular/core';
import { UploadPhotoComponent } from "../upload-photo/upload-photo.component";

@Component({
    selector: 'app-user-profile',
    standalone: true,
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css',
    imports: [UploadPhotoComponent]
})
export class UserProfileComponent {

}
