import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <nav className="landing-nav">
      <div className="logo-section">
        <Link to="/" className="logo-text">Finora</Link>
      </div>

      <div className="nav-links">
        <a href="#features" className="nav-link">Features</a>
        <a href="#pricing" className="nav-link">Pricing</a>
        <a href="#about" className="nav-link">About</a>
      </div>

      <div className="nav-auth">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="btn-hero-secondary" style={{ padding: '8px 16px', fontSize: '14px' }}>Dashboard</Link>
            <button onClick={handleLogout} className="nav-link">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn-signin nav-link">Sign In</Link>
            <Link to="/signup" className="btn-getstarted">Get Started</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
