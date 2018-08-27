import {LoginFormComponent} from './login-form.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginFormService} from './login-form.service';
import {MatFormFieldModule} from '@angular/material';
import {AuthModule} from '../../../auth/auth.module';
import {AuthService} from '../../../auth/auth.service';
import {ChatterHttpClient} from '../../../chatter-http/chatter-http-client';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';
import {RouterLinksService} from '../../../routes/router-links.service';
import {WebsocketService} from '../../../websocket/websocket.service';
import {WebsocketModule} from '../../../websocket/websocket.module';
import {RouterStub} from '../../../../stumbs/router.stumb';

describe('LoginFormComponent', () => {

  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        AuthModule,
        HttpClientModule,
        RouterModule,
        WebsocketModule
      ],
      declarations: [LoginFormComponent],
      providers: [
        LoginFormService,
        AuthService,
        ChatterHttpClient,
        HttpClient,
        RouterLinksService,
        {
          provide: Router,
          useClass: RouterStub
        },
        WebsocketService,
        FormBuilder
      ]
    });

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create formGroup', () => {
    const service = TestBed.get(LoginFormService);
    spyOn(service, 'init').and.returnValue(new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    }));

    expect(component.formGroup).not.toBeNull();
  });

});
