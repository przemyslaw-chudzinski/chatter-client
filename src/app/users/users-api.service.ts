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

  loadUser(userId = ''): Observable<IResponseData<IUser>> {
    if (userId === '') throw new Error('userId is required');
    return this._httpClient.get<IResponseData<IUser>>(usersEndpoints.userEndpoint(userId));
  }

  update(user: IUser): Observable<IResponseData<IUser>> {
    return this._httpClient.post<IResponseData<IUser>>(usersEndpoints.updateProfileEndpoint, user);
  }

  loadLoggedUser(): Observable<IResponseData<IUser>> {
    return this._httpClient.get<IResponseData<IUser>>(usersEndpoints.loggedUserEndpoint);
  }

  loadAvatar(): Observable<IResponseData<IFile>> {
    return this._httpClient.get<IResponseData<IFile>>(usersEndpoints.userAvatarEndpoint);
  }
}
