import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterResetPasswordFormComponent } from './chatter-reset-password-form.component';

describe('ResetPasswordFormComponent', () => {
  let component: ChatterResetPasswordFormComponent;
  let fixture: ComponentFixture<ChatterResetPasswordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatterResetPasswordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatterResetPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
