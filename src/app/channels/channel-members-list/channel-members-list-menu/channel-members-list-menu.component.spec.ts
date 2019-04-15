import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelMembersListMenuComponent } from './channel-members-list-menu.component';

describe('ChannelMembersListMenuComponent', () => {
  let component: ChannelMembersListMenuComponent;
  let fixture: ComponentFixture<ChannelMembersListMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelMembersListMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelMembersListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
