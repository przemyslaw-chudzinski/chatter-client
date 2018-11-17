import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationInvitationToGroupChatComponent } from './notification-invitation-to-group-chat.component';

describe('NotificationInvitationToGroupChatComponent', () => {
  let component: NotificationInvitationToGroupChatComponent;
  let fixture: ComponentFixture<NotificationInvitationToGroupChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationInvitationToGroupChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationInvitationToGroupChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
