import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Forms from "./pages/Forms";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="app-container">
        {/* ✅ Sticky full-width header */}
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="body-container">
          {/* ✅ Sidebar on the left */}
          <Sidebar isOpen={isSidebarOpen} />

          {/* ✅ Main content area only adjusts with sidebar */}
          <main
            className={`page-content ${
              isSidebarOpen ? "sidebar-expanded" : "sidebar-collapsed"
            }`}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/account" element={<Account />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
