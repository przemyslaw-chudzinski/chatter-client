import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedInputControlComponent } from './extended-input-control.component';

describe('ExtendedInputControlComponent', () => {
  let component: ExtendedInputControlComponent;
  let fixture: ComponentFixture<ExtendedInputControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedInputControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
