import { IUsers } from "../models/IUser.ts";
import listUsers from "../services/UsersService.ts";
import User from "./User.tsx";
const Users = () => {
  const [users, error, isLoading] = listUsers();
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.toString()}</div>}
      <ul>
        {Array.isArray(users) &&
          users.map((user: IUsers) => (
            <div key={user.id}>
              <User user={user} />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Users;
