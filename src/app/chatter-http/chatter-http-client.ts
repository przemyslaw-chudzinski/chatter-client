import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ChatterHttpClient {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options: {}): Observable<T> {
    return this.httpClient.get<T>(url, options);
  }

  post<T>(url: string, body: any, options = {}): Observable<T> {
    return this.httpClient.post<T>(url, body, options);
  }

  put<T>(url: string, body: any, options = {}): Observable<T> {
    return this.httpClient.put<T>(url, body, options);
  }
}

/**
 * TODO:
 *
 * 1. Passing header with Authorization token
 *
 * 2. Make more generic
 */
