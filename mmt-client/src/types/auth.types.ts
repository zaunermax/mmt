export enum UserRole {
  admin = 'admin',
  player = 'player',
}

export type LoginUser = {
  username: string;
  password: string;
};

export interface TokenUser {
  username: string;
  role: UserRole;
  id: string;
}
