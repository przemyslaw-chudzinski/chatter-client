import {decodedToken, removeToken, saveToken, token} from './helpers';
// import {JwtHelperService} from '@auth0/angular-jwt';

// const jwtHelper = new JwtHelperService();
const _testToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
  '.eyJ1c2VyIjp7Il9pZCI6IjViNzA1YTI0MmRkMmViODU3ODczMjI3NiIsImZpcn' +
  'N0TmFtZSI6IlByemVteXPFgmF3IiwibGFzdE5hbWUiOiJDaHVkemnFhHNraSIsImVtY' +
  'WlsIjoicHJ6ZW15c2xhdy1jaHVkemluc2tpQHdwLnBsIiwicGFzc3dvcmQiOiJzaGExJGRhZ' +
  'jliZGFlJDEkY2ZkYTQwYjgxODViYjdmZmFiMzI0MGExM2JkZjI5OWFjY2ExMWQ1MCIsImNvbmZpcm1lZCI6dH' +
  'J1ZSwiY3JlYXRlZEF0IjoiMjAxOC0wOC0xMlQxNjowMjo0NC4zMjJaIiwidXBkYXRlZEF0IjoiMjAxOC0wOC0x' +
  'MlQxNjowMjo0NC4zMjJaIiwiYXZhdGFyIjoiaHR0cDovL3BsYWNlaG9sZC5pdC8xMDB4MTAwIn0sImlhdCI6MTUzNTEz' +
  'MTA5NCwiZXhwIjoxNTM1MTY3MDk0fQ.PtHrldzzsf9gCC6-aqyrEuY0KdMJjg4QUqM9Y8jb4FA';


describe('token helper function', () => {

  it('should return string when tokenName is provided and token exits', () => {
    localStorage.setItem('test_token', 'test_token_content');
    expect( token('test_token')).toBe('test_token_content');
    localStorage.removeItem('test_token');
  });

  it('should return null when tokenName doesn"t exists in local storage', () => {
    expect(token('test_not_existing_token_name')).toBe(null);
  });

  it('should return string when row in local storge has key with name token', () => {
    localStorage.setItem('token', 'token_content');
    expect(token()).toBe('token_content');
    localStorage.removeItem('token');
  });

  it('should return null when local storge doesn"t contain row with with name of key token', () => {
    localStorage.removeItem('token');
    expect(token()).toBeNull();
  });

});

describe('removeToken helper function', () => {

  it('should remove row from local storage which contains token as a name when tokenName is not provided', () => {
    localStorage.setItem('token', 'token_content');
    removeToken();
    expect(localStorage.getItem('token')).toBeNull();
  });

  it('should remove row from local storage which contains tokenName when tokenName is provided', () => {
    localStorage.setItem('test_token_name', 'test_token_name_content');
    removeToken('test_token_name');
    expect(localStorage.getItem('test_token_name')).toBeNull();
  });

});

describe('saveToken helper function', () => {

  it('should create a row in local storage with key token when tokenName is not provided', () => {
    saveToken('test_content');
    expect(localStorage.getItem('token')).toBe('test_content');
    localStorage.removeItem('token');
  });

  it('should create a row in local storage with key tokeName when tokenName is provided', () => {
    saveToken('test_content', 'test_token');
    expect(localStorage.getItem('test_token')).toBe('test_content');
    localStorage.removeItem('test_token');
  });

});

describe('tokenExpired helper function', () => {

  it('should return true when provided token is not expired', () => {

  });

  it('should return false when provided token is expired', () => {

  });

  it('should return true when row with key token exits and token is not expired and token is not provided', () => {

  });

  it('should return false when row with key token exits and token is expired and token is not provided', () => {

  });

});


describe('decodedToken helper function', () => {

  it('should return decoded token when token is provided', () => {
    expect(typeof decodedToken(_testToken) === 'object').toBeTruthy();
  });

  it('should return decoded token when token is not provided', () => {
    saveToken(_testToken);
    expect(typeof decodedToken() === 'object').toBeTruthy();
  });

  it('should return null when row with key token doesn"t exist and token is not provided', () => {
    removeToken('token');
    expect(decodedToken()).toBeNull();
  });


});
