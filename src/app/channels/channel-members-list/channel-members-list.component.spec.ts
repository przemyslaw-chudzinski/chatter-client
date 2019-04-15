import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelMembersListComponent } from './channel-members-list.component';

describe('ChannelMembersListComponent', () => {
  let component: ChannelMembersListComponent;
  let fixture: ComponentFixture<ChannelMembersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelMembersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
