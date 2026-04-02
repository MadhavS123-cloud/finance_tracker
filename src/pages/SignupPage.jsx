import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck, Zap, BarChart2 } from 'lucide-react';
import '../styles/auth.css';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    if (fullName && email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <Link to="/" className="auth-logo">Finora</Link>
            <h2 className="auth-title">Create an account</h2>
            <p className="auth-subtitle">Start your 14-day free trial today.</p>
          </div>

          <form className="auth-form" onSubmit={handleSignup}>
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="Enter your full name" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

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
                  placeholder="Create a password" 
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

            <div className="input-group">
              <label className="input-label">Confirm Password</label>
              <input 
                type="password" 
                className="input-field" 
                placeholder="Confirm your password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-auth">Sign Up</button>
          </form>

          <p className="auth-footer">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>

      <div className="auth-side">
        <div className="auth-side-content">
          <h2 className="side-title">Empower your financial future</h2>
          <div className="side-feature">
            <BarChart2 size={24} />
            <p>Master your personal finances with professional tools.</p>
          </div>
          <div className="side-feature">
            <Zap size={24} />
            <p>Access your dashboard instantly from any device.</p>
          </div>
          <div className="side-feature">
            <ShieldCheck size={24} />
            <p>We respect your privacy. All your data stays local.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
