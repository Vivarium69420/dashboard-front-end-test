import { IUsers } from "../models/IUser";

type Props = {
  user: IUsers;
};

function User({ user }: Props) {
  return (
    <div>
      <p>{user.id}</p>
      <p>{user.username}</p>
      <p>{user.password}</p>
      <p>{user.firstname + user.lastname}</p>
    </div>
  );
}

export default User;
