import * as Yup from "yup";

export const registerSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});
