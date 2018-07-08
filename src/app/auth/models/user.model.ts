export interface IUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  available?: boolean;
}
