import { Injectable } from '@angular/core';
import { ChatterHttpClient } from '../chatter-http/chatter-http-client';
import { Observable } from 'rxjs';
import { IResponseData } from '../chatter-http/models/response-data';
import { IUser } from '../auth/models/user.model';
import { usersEndpoints } from '../chatter-http/http-endpoints';
import {IFile} from '../files/models/file.model';

@Injectable()
export class UsersApiService {
  constructor(
    private _httpClient: ChatterHttpClient
  ) {}

  loadUsers(): Observable<IResponseData<IUser[]>> {
    return this._httpClient.get<IResponseData<IUser[]>>(usersEndpoints.usersEndpoint);
  }

  loadUser(userId = ''): Observable<IUser> {
    if (userId === '') {
      throw new Error('userId is required');
    }
    return this._httpClient.get<IUser>(usersEndpoints.userEndpoint(userId));
  }

  update(user: IUser): Observable<IUser> {
    return this._httpClient.post<IUser>(usersEndpoints.updateProfileEndpoint, user);
  }

  loadLoggedUser(): Observable<IUser> {
    return this._httpClient.get(usersEndpoints.loggedUserEndpoint);
  }

  loadAvatar(): Observable<IFile> {
    return this._httpClient.get(usersEndpoints.userAvatarEndpoint);
  }
}
