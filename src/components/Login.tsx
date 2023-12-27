import { useEffect, useState } from "react";
import useAxiosFunction from "../hooks/useAxiosFunction";
import JwtAI from "../api/JwtAI";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { setAuth } = useAuth();
  const { auth } = useAuth();
  const [response, error, loading, axiosFetch] = useAxiosFunction();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    const authString = "Basic " + btoa(username + ":" + password);
    axiosFetch({
      axiosInstance: JwtAI,
      method: "get",
      url: "/jwt",
      requestConfig: {
        headers: {
          Authorization: authString,
        },
      },
    });
  };

  useEffect(() => {
    if (response.status === 200) {
      setAuth(response.data);
    }
  }, [response, setAuth]);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => {e.preventDefault(); loginUser();}} action="" method="get">
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {response.status === 200 && <p>Login succesfully</p>}
        {auth && <p>Auth: {auth}</p>}
      </div>
    </div>
  );
};

export default Login;