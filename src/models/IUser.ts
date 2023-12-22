export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  createTime: string;
  users: Users;
}

interface Users {
  id: number;
  username: string;
  password: string;
  roles: string;
  userDetails: number;
}
