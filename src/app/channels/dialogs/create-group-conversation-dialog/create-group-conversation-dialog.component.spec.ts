import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupConversationDialogComponent } from './create-group-conversation-dialog.component';

describe('CreateGroupConversationDialogComponent', () => {
  let component: CreateGroupConversationDialogComponent;
  let fixture: ComponentFixture<CreateGroupConversationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGroupConversationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroupConversationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
