import {AppComponent} from './app.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LayoutModule} from './layout/layout.module';
import {By} from '@angular/platform-browser';
import {AuthModule} from './auth/auth.module';
import {AuthService} from './auth/auth.service';
import {ChatterHttpClient} from './chatter-http/chatter-http-client';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {WebsocketModule} from './websocket/websocket.module';
import {WebsocketService} from './websocket/websocket.service';
import {Store} from '@ngrx/store';
import {StoreStumb} from '../stumbs/StoreStumb';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterOutlet} from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LayoutModule,
        AuthModule,
        HttpClientModule,
        RouterTestingModule,
        WebsocketModule,
        BrowserAnimationsModule
      ],
      declarations: [AppComponent],
      providers: [AuthService, ChatterHttpClient, HttpClient,
        WebsocketService,
        {
          provide: Store,
          useClass: StoreStumb
        },
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have chatter layout', () => {
    const debugElem = fixture.debugElement.query(By.css('chatter-layout'));
    expect(debugElem).not.toBeNull();
  });

  // it('should have router outlet inside chatter layout', () => {
  //   const debugElem = fixture.debugElement.query(By.css('chatter-layout'));
  //   const routerElem = debugElem.nativeElement;
  //   console.log(routerElem);
  //   expect(debugElem).not.toBeNull();
  // });

});
