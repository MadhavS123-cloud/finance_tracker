import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck, Zap, BarChart2 } from 'lucide-react';
import '../styles/auth.css';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } else {
      alert('Please fill in both email and password.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <Link to="/" className="auth-logo">Finora</Link>
            <h2 className="auth-title">Welcome back</h2>
            <p className="auth-subtitle">Welcome back! Please enter your details.</p>
          </div>

          <form className="auth-form" onSubmit={handleLogin}>
            <div className="input-group">
              <label className="input-label">Email</label>
              <input 
                type="email" 
                className="input-field" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Password</label>
              <div className="password-container">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="input-field" 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%' }}
                  required
                />
                <button 
                  type="button" 
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember for 30 days</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="btn-auth">Sign In</button>
          </form>

          <p className="auth-footer">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>

      <div className="auth-side">
        <div className="auth-side-content">
          <h2 className="side-title">Track your finances with ease</h2>
          <div className="side-feature">
            <BarChart2 size={24} />
            <p>Get real-time insights into your spending habits and trends.</p>
          </div>
          <div className="side-feature">
            <Zap size={24} />
            <p>Fast, clean, and modern dashboard with a focus on usability.</p>
          </div>
          <div className="side-feature">
            <ShieldCheck size={24} />
            <p>Your data stays local and secure with our frontend-only architecture.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
