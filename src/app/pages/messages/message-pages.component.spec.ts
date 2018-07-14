import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePagesComponent } from './message-pages.component';

describe('MessagesComponent', () => {
  let component: MessagePagesComponent;
  let fixture: ComponentFixture<MessagePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessagePagesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
