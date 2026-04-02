import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './App.css';

function App() {
  const [role, setRole] = useState('admin');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [theme, setTheme] = useState('light');

  // Persistence
  useEffect(() => {
    const savedRole = localStorage.getItem('finance_role');
    const savedTheme = localStorage.getItem('finance_theme');
    if (savedRole) setRole(savedRole);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('finance_role', role);
    localStorage.setItem('finance_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [role, theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route 
            path="/dashboard/*" 
            element={
              <ProtectedRoute>
                <DashboardLayout 
                  role={role}
                  setRole={setRole}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  isSidebarCollapsed={isSidebarCollapsed}
                  setIsSidebarCollapsed={setIsSidebarCollapsed}
                  theme={theme}
                  toggleTheme={toggleTheme}
                  logout={logout}
                />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
