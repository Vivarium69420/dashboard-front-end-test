import dashboardAI from "../api/dashboardAI";
import useAxios from "../hooks/useAxios";

const listUsers = () => {
  return useAxios({
    axiosInstance: dashboardAI,
    method: "GET",
    url: "/list",
  });
};

export default listUsers;
