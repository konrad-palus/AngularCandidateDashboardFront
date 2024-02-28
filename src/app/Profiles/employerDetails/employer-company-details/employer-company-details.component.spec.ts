import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerCompanyDetailsComponent } from './employer-company-details.component';

describe('EmployerCompanyDetailsComponent', () => {
  let component: EmployerCompanyDetailsComponent;
  let fixture: ComponentFixture<EmployerCompanyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerCompanyDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployerCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
