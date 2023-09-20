import axios from "axios";
import { BASE_URL } from "./constant";
import { User } from "../helpers/api-interface";

export const registerApi = async (user: User) => {
  return await axios.post(`${BASE_URL}/register`, {
    username: user.username,
    email: user.email,
    password: user.password,
  });
};
