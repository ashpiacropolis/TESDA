import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicanPremedComponent } from './applican-premed.component';

describe('ApplicanPremedComponent', () => {
  let component: ApplicanPremedComponent;
  let fixture: ComponentFixture<ApplicanPremedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicanPremedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicanPremedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
