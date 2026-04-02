import React, { useState } from 'react';
import { User, Bell, Lock, Shield, CreditCard, Layout } from 'lucide-react';
import './Settings.css';

const Settings = ({ theme, toggleTheme }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="settings-section">
      <div className="settings-sidebar">
        <h3>Settings</h3>
        <nav className="settings-nav">
          <button 
            className={`settings-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={18} /> Profile
          </button>
          <button 
            className={`settings-nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <Bell size={18} /> Notifications
          </button>
          <button 
            className={`settings-nav-item ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <Shield size={18} /> Security
          </button>
          <button 
            className={`settings-nav-item ${activeTab === 'preferences' ? 'active' : ''}`}
            onClick={() => setActiveTab('preferences')}
          >
            <Layout size={18} /> Preferences
          </button>
        </nav>
      </div>

      <div className="settings-content-area">
        {activeTab === 'profile' && (
          <div className="settings-card">
            <h4>Profile Information</h4>
            <p className="text-muted">Update your account's profile information and email address.</p>
            
            <div className="form-group-settings">
              <label>Full Name</label>
              <input type="text" defaultValue="John Doe" className="settings-input" />
            </div>
            <div className="form-group-settings">
              <label>Email Address</label>
              <input type="email" defaultValue="john.doe@example.com" className="settings-input" />
            </div>
            <div className="form-group-settings">
              <label>Phone Number</label>
              <input type="tel" defaultValue="+1 (555) 000-0000" className="settings-input" />
            </div>
            
            <button className="btn-primary" style={{marginTop: '1rem'}}>Save Changes</button>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="settings-card">
            <h4>Security & Authentication</h4>
            <p className="text-muted">Manage your password and secure your account.</p>
            
            <div className="toggle-group">
              <div className="toggle-info">
                <h5>Two-Factor Authentication</h5>
                <p>Add an extra layer of security to your account.</p>
              </div>
              <label className="switch">
                <input type="checkbox" checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
                <span className="slider round"></span>
              </label>
            </div>

            <hr className="settings-divider" />

            <h5>Change Password</h5>
            <div className="form-group-settings">
              <label>Current Password</label>
              <input type="password" placeholder="••••••••" className="settings-input" />
            </div>
            <div className="form-group-settings">
              <label>New Password</label>
              <input type="password" placeholder="••••••••" className="settings-input" />
            </div>
            
            <button className="btn-primary" style={{marginTop: '1rem'}}>Update Password</button>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="settings-card">
            <h4>Notification Preferences</h4>
            <div className="toggle-group">
              <div className="toggle-info">
                <h5>Email Notifications</h5>
                <p>Receive daily summaries and transaction alerts.</p>
              </div>
              <label className="switch">
                <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        )}

        {activeTab === 'preferences' && (
          <div className="settings-card">
            <h4>App Preferences</h4>
            <div className="toggle-group">
              <div className="toggle-info">
                <h5>Dark Mode</h5>
                <p>Switch between light and dark themes.</p>
              </div>
              <label className="switch">
                <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
