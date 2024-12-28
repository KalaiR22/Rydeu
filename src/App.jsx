import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";

function App() {
  const AppWrapper = () => {
    const location = useLocation();

    // Paths where the header should not be displayed
    const hideHeaderPaths = ["/dashboard"];

    return (
      <>
        {!hideHeaderPaths.includes(location.pathname) && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </>
    );
  };

  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
