import { useState } from "react";
import { Card } from "antd";
import LoginForm from "./login-form";
import { loginApi } from "../../../api/auth-api";

type handleData = {
  username: string;
  password: string;
};

export default function Login() {
  const [formData] = useState({
    loginData: {
      username: "",
      password: "",
    },
  });

  const handleSubmit = async (data: handleData) => {
    try {
      const accessToken = await loginApi(data.username, data.password);
      console.log("Login successful. Access Token:", accessToken);
      localStorage.setItem("accessToken", accessToken); //simpan accessToken di localstorage
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Card>
      <div>
        <LoginForm initialValues={formData.loginData} onLogin={handleSubmit} />
      </div>
    </Card>
  );
}
