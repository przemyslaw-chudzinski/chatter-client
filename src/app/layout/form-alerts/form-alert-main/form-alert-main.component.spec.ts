import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlertMainComponent } from './form-alert-main.component';

describe('FormAlertMainComponent', () => {
  let component: FormAlertMainComponent;
  let fixture: ComponentFixture<FormAlertMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAlertMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlertMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
