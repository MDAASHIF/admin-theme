import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Grid, TextField, Button } from "@mui/material";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from './Pages/Dashboard';
import UserList from "./Pages/UserList";
import UserAdd from "./Pages/UserAdd";
import Login from "./Auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<MainLayout />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

function MainLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onToggleSidebar={handleToggleSidebar} />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
        <div style={{ marginLeft: isSidebarOpen ? 240 : 0, padding: 16, marginTop: 5, flex: 1 }}>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/user-add" element={<UserAdd />} />
          </Routes>
        </div>
      </div>
      <Footer isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

export default App;
