import { IUser } from "../models/IUser";

type Props = {
  user: IUser;
};

function User({ user }: Props) {
  return (
    <div>
      <p>{user.id}</p>
      <p>{user.users.username}</p>
      <p>{user.users.password}</p>
      <p>{user.users.roles}</p>
      <p>{user.users.userDetails}</p>
      <p>{user.firstname + user.lastname}</p>
      <p>{user.email}</p>
      <p>{user.createTime}</p>
    </div>
  );
}

export default User;
