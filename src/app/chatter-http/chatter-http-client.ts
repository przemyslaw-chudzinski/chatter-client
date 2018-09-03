import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ChatterHttpClient {
  private _defaultOptions = {
  };

  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options = this._defaultOptions): Observable<T> {
    return this.httpClient.get<T>(url, options);
  }

  post<T>(url: string, body: any, options = this._defaultOptions): Observable<T> {
    return this.httpClient.post<T>(url, body, options);
  }

  put<T>(url: string, body: any, options = this._defaultOptions): Observable<T> {
    return this.httpClient.put<T>(url, body, options);
  }

  patch<T>(url: string, body: any, options = this._defaultOptions): Observable<T> {
    return this.httpClient.patch<T>(url, body, options);
  }
}

