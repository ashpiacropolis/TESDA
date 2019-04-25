import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantTesdaComponent } from './applicant-tesda.component';

describe('ApplicantTesdaComponent', () => {
  let component: ApplicantTesdaComponent;
  let fixture: ComponentFixture<ApplicantTesdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantTesdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantTesdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
