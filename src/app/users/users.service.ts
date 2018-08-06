import { Injectable } from '@angular/core';
import { ChatterHttpClient } from '../chatter-http/chatter-http-client';
import { Observable } from 'rxjs';
import { IResponseData } from '../models/response-data';
import { IUser } from '../auth/models/user.model';
import { usersEndpoints } from '../chatter-http/http-endpoints';

@Injectable()
export class UsersService {
  constructor(
    private httpClient: ChatterHttpClient
  ) {}

  loadUsers(): Observable<IResponseData<IUser>> {
    return this.httpClient.get<IResponseData<IUser>>(usersEndpoints.usersEndpoint);
  }

  loadUser(userId = ''): Observable<IUser> {
    if (userId === '') {
      throw new Error('userId is required');
    }
    return this.httpClient.get<IUser>(usersEndpoints.userEndpoint(userId));
  }
}
