import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChannelNameFormComponent } from './edit-channel-name-form.component';

describe('EditChannelNameFormComponent', () => {
  let component: EditChannelNameFormComponent;
  let fixture: ComponentFixture<EditChannelNameFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChannelNameFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChannelNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
