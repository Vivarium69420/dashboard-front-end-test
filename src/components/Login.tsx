import useAxiosFunction from "../hooks/useAxiosFunction";
const Login = () => {
  const [userInfo, error, loading, axiosFetch] = useAxiosFunction();
  const loginUser = () => {
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => e.preventDefault()} action="" method="post">
        <input
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          type="text"
          name="password"
          placeholder="password"
        />
        <button type="submit" onClick={loginUser}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
