import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPagesComponent } from './channel-pages.component';

describe('ChannelPagesComponent', () => {
  let component: ChannelPagesComponent;
  let fixture: ComponentFixture<ChannelPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
