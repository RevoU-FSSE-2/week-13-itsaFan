import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing-page";
import DashboardPage from "./pages/dashboard-page";
import { useContext } from "react";
import AuthContext from "./context/auth-context";

function App() {
  const { isLoggedIn, currentUser } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* Authenticated Routing */}
      {isLoggedIn && (
        <>
          {/* Role aunthentication */}
          {currentUser.role === "user" && (
            <>
              <Route path="/dashboard" element={<DashboardPage />} />
            </>
          )}
        </>
      )}
    </Routes>
  );
}

export default App;
