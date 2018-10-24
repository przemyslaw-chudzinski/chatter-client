import { Injectable } from '@angular/core';
import {ChatterHttpClient} from '../chatter-http/chatter-http-client';
import {Observable} from 'rxjs';
import {filesEndpoints} from '../chatter-http/http-endpoints';
import {IFile} from './models/file.model';

@Injectable()
export class FilesApiService {

  constructor(
    private _httpClient: ChatterHttpClient
  ) {}

  uploadFiles(payload: FileList): Observable<IFile[]> {
    const formData = new FormData();
    const files = Object.values(payload);
    files.forEach((file, index) => {
      formData.append(index.toString(), file);
    });
    return this._httpClient.post<IFile[]>(filesEndpoints.uploadFilesEndpoint, formData);
  }

}
