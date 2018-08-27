import {EditMessageDialogComponent} from './edit-message-dialog.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MessageEditorComponent} from '../../message-editor/message-editor.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material';
import {SpinnerModule} from '../../../spinner/spinner.module';
import {Store} from '@ngrx/store';
import {MessagesApiService} from '../../messages-api.service';
import {ChatterHttpModule} from '../../../chatter-http/chatter-http.module';
import {ChatterHttpClient} from '../../../chatter-http/chatter-http-client';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthService} from '../../../auth/auth.service';
import {AuthModule} from '../../../auth/auth.module';
import {Router} from '@angular/router';
import {RouterStub} from '../../../../stumbs/router.stumb';
import {WebsocketService} from '../../../websocket/websocket.service';
import {WebsocketModule} from '../../../websocket/websocket.module';

export class StoreStumb<T> {
  dispatch(): void {}
}

export class MatDialogRefStumb {
  close(): void {}
}

describe('EditMessageDialogComponent', () => {

  let component: EditMessageDialogComponent;
  let fixture: ComponentFixture<EditMessageDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        SpinnerModule,
        ChatterHttpModule,
        HttpClientModule,
        AuthModule,
        WebsocketModule
      ],
      declarations: [
        EditMessageDialogComponent,
        MessageEditorComponent
      ],
      providers: [
        {
          provide: MatDialogRef,
          useClass: MatDialogRefStumb
        },
        {
          provide: MAT_DIALOG_DATA,
          value: {}
        },
        {
          provide: Store,
          useClass: StoreStumb
        },
        MessagesApiService,
        ChatterHttpClient,
        HttpClient,
        AuthService,
        {
          provide: Router,
          useClass: RouterStub
        },
        WebsocketService
      ]
    });

    fixture = TestBed.createComponent(EditMessageDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

});
