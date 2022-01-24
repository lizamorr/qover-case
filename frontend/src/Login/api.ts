import axios from "axios";

export const login = async (username: string, password: string) => {
  axios.defaults.baseURL = process.env.REACT_APP_NESTJS_BASE_URL;
  return await axios.post("/auth/login", {
    username,
    password,
  });
};
