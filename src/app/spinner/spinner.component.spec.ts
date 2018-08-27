import {TestBed, ComponentFixture} from '@angular/core/testing';
import {SpinnerComponent} from './spinner.component';
import {MatProgressSpinnerModule} from '@angular/material';
import {BackdropComponent} from './backdrop/backdrop.component';
import {LoaderComponent} from './loader/loader.component';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule],
      declarations: [SpinnerComponent, BackdropComponent, LoaderComponent]
    });

    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

});
