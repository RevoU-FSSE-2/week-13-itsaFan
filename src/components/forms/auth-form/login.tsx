import { useState } from "react";
import { Card } from "antd";
import LoginForm from "./login-form";
import { loginApi } from "../../../api/auth-api";
import { useNavigate } from "react-router-dom";

type handleData = {
  username: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const [formData] = useState({
    loginData: {
      username: "",
      password: "",
    },
  });

  const [error, setError] = useState("");

  const handleSubmit = async (data: handleData) => {
    try {
      const accessToken = await loginApi(data.username, data.password);
      console.log("Login successful. Access Token:", accessToken);
      localStorage.setItem("accessToken", accessToken);

      navigate("/dashboard");
      window.location.reload();
    } catch (error: any) {
      console.error("Login failed:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred during login.");
      }
    }
  };

  return (
    <Card style={{ width: 400 }} title="Login">
      <div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <LoginForm initialValues={formData.loginData} onLogin={handleSubmit} />
      </div>
    </Card>
  );
}
