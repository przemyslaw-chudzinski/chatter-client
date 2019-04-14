import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsChannelPageComponent } from './details-channel-page.component';

describe('DetailsChannelPageComponent', () => {
  let component: DetailsChannelPageComponent;
  let fixture: ComponentFixture<DetailsChannelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsChannelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsChannelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
