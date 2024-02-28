import { Component } from '@angular/core';
import { AccountService } from '../../../services/user-managment-service.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-employer-company-details',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, MatIconModule,],
  templateUrl: './employer-company-details.component.html',
  styleUrl: './employer-company-details.component.css'
})
export class EmployerCompanyDetailsComponent {
  companyName: string = ''; 
  companyDescription: string = '';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.loadCompanyName();
    this.loadCompanyDescription();
  }

  updateCompanyName(): void {
    this.accountService.updateCompanyName(this.companyName).subscribe({
      next: (response) => console.log('CompanyName updated successfully', response),
      error: (error) => console.error('Error updating CompanyName', error),
    });
  }

  updateCompanyDescription(): void {
    this.accountService.updateCompanyDescription(this.companyDescription).subscribe({
      next: (response) => console.log('CompanyDescription updated successfully', response),
      error: (error) => console.error('Error updating CompanyDescription', error),
    });
  }

  loadCompanyName(): void {
    this.accountService.getCompanyName().subscribe({
      next: (data) => {
        console.log(data);
        if (data.companyName) {
          this.companyName = data.companyName;
        }
      },
      error: (error) => console.error('Error fetching company name', error),
    });
  }

  loadCompanyDescription(): void {
    this.accountService.getCompanyDescription().subscribe({
      next: (data) => {
        console.log(data);
        if (data.companyDescription) {
          this.companyDescription = data.companyDescription;
        }
      },
      error: (error) => console.error('Error fetching company description', error),
    });
  }
}