import {Injectable} from '@angular/core';
import {ChatterHttpClient} from '../../chatter-http/chatter-http-client';
import {Observable} from 'rxjs';
import {authEndpoints} from '../../chatter-http/http-endpoints';
import {ValidationErrors} from '@angular/forms';

@Injectable()
export class ValidatorsService {
  constructor(
    private httpClient: ChatterHttpClient
  ) {}

  checkEmail(email: string): Observable<ValidationErrors | null> {
    return this.httpClient.post(authEndpoints.checkEmailEndpoint, email);
  }
}
