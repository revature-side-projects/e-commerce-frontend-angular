// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// @ts-ignore
import config from '../../auth_config.json';

const { domain, clientId, apiUri, errorPath } = config as {
  domain: string;
  clientId: string;
  apiUri: string;
  errorPath: string;
};

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
    errorPath,
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },
  baseUrl: "http://localhost:8080",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://127.0.0.1:4200',
  },
  withCredentials: true,
};

/*
export const environment = {
  production: true,
  withCredentials: true,
  baseUrl: "http://backend-env.eba-g9uchpeu.us-west-2.elasticbeanstalk.com",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
}
=======
>>>>>>> 4bd3e1d11cb57551743587ebe3fce235b03e43ab


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */

