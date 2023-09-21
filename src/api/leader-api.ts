import axios from "axios";
import { BASE_URL } from "./constant";

export const getTasks = async (token: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/leader/tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error when trying to get tasks", error);
    throw error;
  }
};
