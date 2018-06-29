// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const domainConfig = {
  clientUrl: 'http://localhost:4200',
  apiUrl: 'http://localhost:8000'
};

export const environment = {
  production: false,
  tokenKey: 'token',
  oauth: {
    grant_type: 'authorization_code',
    client_id: 1,
    client_secret: 'PUi4n07WyJ35px3M7lPOzab1xC1yvMQjgdbIUa1D	',
    redirect_uri: domainConfig.clientUrl + '/callback'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
