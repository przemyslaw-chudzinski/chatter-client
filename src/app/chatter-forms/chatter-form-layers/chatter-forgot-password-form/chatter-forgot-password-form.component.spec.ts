import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterForgotPasswordFormComponent } from './chatter-forgot-password-form.component';

describe('ForgotPasswordFormComponent', () => {
  let component: ChatterForgotPasswordFormComponent;
  let fixture: ComponentFixture<ChatterForgotPasswordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatterForgotPasswordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatterForgotPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
