export type RegistrationProps = {
  initialValues: {
    username: string;
    email: string;
    password: string;
  };
  onRegister: (data: { username: string; email: string; password: string }) => void;
};

export type LoginProps = {
  initialValues: {
    username: string;
    password: string;
  };
  onLogin: (data: { username: string; password: string }) => void;
};
