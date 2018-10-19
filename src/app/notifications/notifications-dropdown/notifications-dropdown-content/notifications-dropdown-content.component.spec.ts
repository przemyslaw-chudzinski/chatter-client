import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsDropdownContentComponent } from './notifications-dropdown-content.component';

describe('NotificationsDropdownContentComponent', () => {
  let component: NotificationsDropdownContentComponent;
  let fixture: ComponentFixture<NotificationsDropdownContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationsDropdownContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsDropdownContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
