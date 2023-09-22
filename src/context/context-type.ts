export const user_type = {
  _id: "",
  username: "",
  email: "",
  password: "",
  role: "",
};

export const context_user = {
  currentUser: user_type,
  isLoggedIn: false,
  token: "",
  login: (token: string) => {},
  logout: () => {},
};
