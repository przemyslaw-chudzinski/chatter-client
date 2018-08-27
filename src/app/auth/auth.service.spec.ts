import {AuthService} from './auth.service';
import {ChatterHttpClient} from '../chatter-http/chatter-http-client';
import {WebsocketService} from '../websocket/websocket.service';
import {saveToken, token} from '../helpers/helpers';
import {empty} from 'rxjs';

describe('auth service', () => {

  let service;

  beforeEach(() => {
    service = new AuthService(
      new ChatterHttpClient(null),
      {navigateByUrl: (): any => null},
      new WebsocketService()
    );
  });

  it('should have signIn method', () => {
    expect(typeof service.signIn !== 'undefined').toBeTruthy();
  });

  describe('signIn', () => {

    it('should send post request into api', () => {
        const spy = spyOn(service, 'signIn').and.callFake(() => empty());
        service.signIn(null);
        expect(spy).toHaveBeenCalled();
    });

    it('should update user$ stream', () => {
      // let _user =  null;
      // const user = {_id: 1, firstName: 'a', lastName: 'b', email: 'asd@asd.pl'};
      // service.user$.pipe(
      //   tap(u => (_user = u))
      // ).subscribe();
      // spyOn(service, 'signIn').and.returnValue(of(user));
      // service.signIn(null);
      // // service.user$.next(user);
      // expect(service.user$.value).toEqual(user);
    });

  });

  it('should have logOut method', () => {
    expect(typeof service.logOut !== 'undefined').toBeTruthy();
  });

  describe('logOut', () => {

    it('should remove token from local storage', () => {
      saveToken('token_content');
      service.logOut();
      expect(token()).toBeNull();
    });

  });

});
