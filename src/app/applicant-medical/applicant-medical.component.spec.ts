import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantMedicalComponent } from './applicant-medical.component';

describe('ApplicantMedicalComponent', () => {
  let component: ApplicantMedicalComponent;
  let fixture: ComponentFixture<ApplicantMedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantMedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
