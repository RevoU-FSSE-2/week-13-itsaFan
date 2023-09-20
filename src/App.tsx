import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing-page";
import DashboardPage from "./pages/dashboard-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />}/>
    </Routes>
  );
}

export default App;
