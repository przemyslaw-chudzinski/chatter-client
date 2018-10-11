import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryNotificationComponent } from './primary-notification.component';

describe('PrimaryNotificationComponent', () => {
  let component: PrimaryNotificationComponent;
  let fixture: ComponentFixture<PrimaryNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
