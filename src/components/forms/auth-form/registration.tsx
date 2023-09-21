import { Card } from "antd";
import { useState } from "react";
import RegistrationForm from "./reg-form";
import { registerApi } from "../../../api/auth-api";
import { User } from "../../../helpers/api-interface";


export default function Registration() {
  const [formData] = useState({
    registrationData: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (user: User) => {
    console.log("Button clicked!"); 
    try {
      await registerApi(user);
      console.log(`Registration success`, user);
    } catch (error) {
      console.error("Registration Fail:", error);
    }
  };

  return (
    <Card style={{ width: 400 }} title="Register">
      <div>
        <RegistrationForm initialValues={formData.registrationData} onRegister={handleSubmit} />
      </div>
    </Card>
  );
}
