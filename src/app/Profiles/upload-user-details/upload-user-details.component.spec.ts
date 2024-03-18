import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadUserDetailsComponent } from './upload-user-details.component';

describe('UploadUserDetailsComponent', () => {
  let component: UploadUserDetailsComponent;
  let fixture: ComponentFixture<UploadUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadUserDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
