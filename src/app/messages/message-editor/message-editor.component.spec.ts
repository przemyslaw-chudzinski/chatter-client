import {MessageEditorComponent} from './message-editor.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AuthModule} from '../../auth/auth.module';
import {AuthService} from '../../auth/auth.service';
import {ChatterStoreModule} from '../../chatter-store/chatter-store.module';
import {ChatterHttpClient} from '../../chatter-http/chatter-http-client';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';
import {RouterStub} from '../../../stumbs/router.stumb';
import {WebsocketModule} from '../../websocket/websocket.module';
import {WebsocketService} from '../../websocket/websocket.service';

describe('MessageEditorComponent', () => {

  let component: MessageEditorComponent;
  let fixture: ComponentFixture<MessageEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AuthModule,
        ChatterStoreModule,
        HttpClientModule,
        RouterModule,
        WebsocketModule
      ],
      declarations: [MessageEditorComponent],
      providers: [
        AuthService,
        ChatterHttpClient,
        HttpClient,
        {
          provide: Router,
          useClass: RouterStub
        },
        WebsocketService
      ]
    });

    fixture = TestBed.createComponent(MessageEditorComponent);
    component = fixture.componentInstance;

  });


  it('should create component', () => {
      expect(component).toBeTruthy();
  });

});
