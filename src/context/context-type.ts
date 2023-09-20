export const user_type = {
  id: "",
  username: "",
  email: "",
  password: "",
  role:"",
};

export const context_user = {
    currentUser: user_type,
    isLoggedIn: false,
    token: "",
    login: (token: string) => {},
    logout: () => {},
  }