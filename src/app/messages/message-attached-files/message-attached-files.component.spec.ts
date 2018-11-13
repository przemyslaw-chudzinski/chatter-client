import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAttachedFilesComponent } from './message-attached-files.component';

describe('MessageAttachedFilesComponent', () => {
  let component: MessageAttachedFilesComponent;
  let fixture: ComponentFixture<MessageAttachedFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageAttachedFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageAttachedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
