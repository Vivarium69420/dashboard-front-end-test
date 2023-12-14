import dashboardAI from "../api/dashboardAI.ts";
import useAxios from "../hooks/useAxios.tsx";
import useAxiosFunction from "../hooks/useAxiosFunction.tsx";
import { IUsers } from "../models/IUser.ts";
import User from "./User.tsx";
const Users = () => {
  const [users, isError, isLoading, refetch] = useAxios({
    axiosInstance: dashboardAI,
    method: "get",
    url: "/list",
  });

  const [response, error, loading, axiosFetch] = useAxiosFunction();

  function handleSubmit() {
    const form = document.querySelector("form") as HTMLFormElement;
    axiosFetch({
      axiosInstance: dashboardAI,
      method: "post",
      url: "/list",
      requestConfig: {
        data: {
          firstname: form.firstname.value,
          lastname: form.lastname.value,
          username: form.username.value,
          password: form.password.value,
        },
      },
    });
    refetch();
    // check if there is an error
    if (error) {
      console.log(error);
    }
    // check if data is loading
    if (loading) {
      console.log("Loading...");
    }
    // check if there is a response
    if (response) {
      console.log(response);
    }
  }
  return (
    <div>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{isError.toString()}</div>}
      <ul>
        {Array.isArray(users) &&
          users.map((user: IUsers) => (
            <div key={user.id}>
              <User user={user} />
            </div>
          ))}
      </ul>
      <form>
        <input type="text" name="firstname" placeholder="firstname" />
        <input type="text" name="lastname" placeholder="lastname" />
        <input type="text" name="username" placeholder="username" />
        <input type="text" name="password" placeholder="password" />
        <button type="submit" onClick={handleSubmit}>
          Add user
        </button>
      </form>
    </div>
  );
};

export default Users;
