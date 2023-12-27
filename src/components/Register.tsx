import dashboardAI from "../api/DashboardAI.ts";
import useAxiosFunction from "../hooks/useAxiosFunction.tsx";
const Register = () => {
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  function registerNewUser() {
    const form = document.querySelector("form") as HTMLFormElement;
    axiosFetch({
      axiosInstance: dashboardAI,
      method: "post",
      url: "/users/create",
      requestConfig: {
        data: {
          username: form.username.value,
          password: form.password.value,
          userDetails: {
            firstname: form.firstname.value,
            lastname: form.lastname.value,
            email: form.email.value,
          },
        },
      },
    });
    // reset form
    form.reset();
  }
  // if (response === 201 ) {
  //   window.location.reload();
  // }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(e) => e.preventDefault()} action="" method="post">
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
        />
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
        <input
          type="text"
          name="email"
          placeholder="email"
        />
        <button type="submit" onClick={registerNewUser}>
          Register
        </button>
      </form>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {response.status === 201 && <p>Create new account succesfully</p>}
      </div>
    </div>
  );
};

export default Register;
