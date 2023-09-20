import { useState } from "react";
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
    // <Card className="pt-4"  title={<CardTitle title="Login" />}>
    <div className="h-96 flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="relative">
        <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
        <div className="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out">
          <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">
            Login
          </h2>
          {error && <div className="text-red-500 pb-4">{error}</div>}
          <LoginForm initialValues={formData.loginData} onLogin={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
