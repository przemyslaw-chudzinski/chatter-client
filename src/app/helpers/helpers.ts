import {environment} from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

/**
 * @desc It returns token from local storage
 */
export const token = (tokenName?: string): string  => localStorage.getItem(tokenName || environment.tokenKey);

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
export const tokenExpired = (_token?: string): boolean => jwtHelper.isTokenExpired(_token || token());

/**
 * @desc It returns decoded token
 */
export const decodedToken = (): any => jwtHelper.decodeToken(token());
