import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterUserSettingsFormComponent } from './chatter-user-settings-form.component';

describe('UserSettingsFormComponent', () => {
  let component: ChatterUserSettingsFormComponent;
  let fixture: ComponentFixture<ChatterUserSettingsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatterUserSettingsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatterUserSettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
