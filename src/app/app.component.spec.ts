import {AppComponent} from './app.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ChildrenOutletContexts, Router, RouterModule, RouterOutlet} from '@angular/router';
import {LayoutModule} from './layout/layout.module';
import {BrowserModule, By} from '@angular/platform-browser';
import {AuthModule} from './auth/auth.module';
import {AuthService} from './auth/auth.service';
import {ChatterHttpClient} from './chatter-http/chatter-http-client';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterStub} from '../stumbs/router.stumb';
import {WebsocketModule} from './websocket/websocket.module';
import {WebsocketService} from './websocket/websocket.service';
import {Store} from '@ngrx/store';
import {StoreStumb} from '../stumbs/StoreStumb';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        LayoutModule,
        BrowserModule,
        AuthModule,
        HttpClientModule,
        RouterTestingModule,
        WebsocketModule,
        BrowserAnimationsModule
      ],
      declarations: [AppComponent],
      providers: [AuthService, ChatterHttpClient, HttpClient,
        {
          provide: Router,
          useClass: RouterStub
        },
        WebsocketService,
        {
          provide: Store,
          useClass: StoreStumb
        },
        ChildrenOutletContexts
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have router outlet', () => {
    const elem = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(elem).not.toBeNull();
  });

});
