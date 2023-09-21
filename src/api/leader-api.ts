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

export const getProjects = async (token: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/leader/projects`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error when trying to get projects", error);
    throw error;
  }
};

type FormData = {
  project: string,
  title: string,
  description: string,
  dueDate: string,
  priority: string,
  assignedTo: string,
}

export const createTask = async (token: string, formData: FormData  ) => {
  try {
    const response = await axios.post(`${BASE_URL}/leader/tasks/add`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Task created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};