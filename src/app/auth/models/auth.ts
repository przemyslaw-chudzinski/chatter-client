export interface IUser {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface IAuthUser extends IUser {
  access_token: string;
}

export interface ILoginResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}
