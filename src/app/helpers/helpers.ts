import {environment} from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

/**
 * @desc It returns token from local storage
 */
export function getToken (tokenName?: string): string  { return localStorage.getItem(tokenName || environment.tokenKey) };

/**
 * @desc It removes token from local storage
 */
export const removeToken = (tokenName?: string): void => localStorage.removeItem(tokenName || environment.tokenKey);

/**
 * @desc It saves token into local storage
 */
export const saveToken = (payload: string, tokenName?: string): void => localStorage.setItem(tokenName || environment.tokenKey, payload);

/**
 * @desc It checks token expired
 */
export const tokenExpired = (_token?: string): boolean => jwtHelper.isTokenExpired(_token || getToken());

/**
 * @desc It returns decoded token
 */
export const decodedToken = (_token?: string): any => jwtHelper.decodeToken(_token || getToken());

/**
 * @desc It checks txt is Url with http or https
 * @param txt
 */
// export const isLink = (txt: string): null | any[] =>
//   (txt.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/, 'ig')));

/**
 * @desc It checks txt is yourube link
 * @param txt
 */
// export const isYoutubeLink = (txt: string): null | any[] =>
//   (txt.match(new RegExp(/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/, 'ig')));
