import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterLoginFormComponent } from './chatter-login-form.component';

describe('LoginFormComponent', () => {
  let component: ChatterLoginFormComponent;
  let fixture: ComponentFixture<ChatterLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatterLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatterLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
