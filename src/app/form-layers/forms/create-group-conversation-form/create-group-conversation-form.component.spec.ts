import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupConversationFormComponent } from './create-group-conversation-form.component';

describe('CreateGroupConversationFormComponent', () => {
  let component: CreateGroupConversationFormComponent;
  let fixture: ComponentFixture<CreateGroupConversationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGroupConversationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroupConversationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
