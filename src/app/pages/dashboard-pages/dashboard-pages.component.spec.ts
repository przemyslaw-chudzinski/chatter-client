import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPagesComponent } from './dashboard-pages.component';

describe('DashboardComponent', () => {
  let component: DashboardPagesComponent;
  let fixture: ComponentFixture<DashboardPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPagesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
