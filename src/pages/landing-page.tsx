import Login from "../components/forms/auth-form/login";
import Registration from "../components/forms/auth-form/registration";

export default function LandingPage() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-5">Hello World</h1>
      <Registration />
      <div className="my-5">
        <Login />
      </div>
    </div>
  );
}
