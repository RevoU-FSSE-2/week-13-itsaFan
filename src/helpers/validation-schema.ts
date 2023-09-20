import * as Yup from "yup";

export const registerSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)/, "Password must be alphanumeric")
    .required("Password is required"),
});

export const loginSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)/, "Password must be alphanumeric")
    .required("Password is required"),
});
