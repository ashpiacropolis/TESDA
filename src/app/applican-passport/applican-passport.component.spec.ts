import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicanPassportComponent } from './applican-passport.component';

describe('ApplicanPassportComponent', () => {
  let component: ApplicanPassportComponent;
  let fixture: ComponentFixture<ApplicanPassportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicanPassportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicanPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
