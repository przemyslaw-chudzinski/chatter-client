import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseData } from '../models/response-data';
import { AuthService } from '../auth/auth.service';
import { IUser } from '../auth/models/user.model';

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient, private auth: AuthService) {}

  get users$(): Observable<ResponseData<IUser>> {
    return this.httpClient
      .get('http://localhost:8000/api/v1/users', {
        headers: {
          Authorization: 'Bearer ' + AuthService.token()
        }
      })
      .pipe(map(response => response as ResponseData<IUser>));
  }
}
