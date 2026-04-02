import RoleSwitcher from '../RoleSwitcher/RoleSwitcher';
import { Search, Bell, User, Moon, Sun } from 'lucide-react';
import './Header.css';

const Header = ({ title, role, setRole, theme, toggleTheme, onLogout }) => {
  return (
    <header className="main-header">
      <div className="header-left">
        <h1 className="page-title">{title}</h1>
      </div>

      <div className="header-right">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search transactions..." />
        </div>

        <div className="header-actions">
          <button 
            className="icon-btn theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button className="icon-btn" aria-label="Notifications">
            <Bell size={20} />
            <span className="notification-dot"></span>
          </button>

          <RoleSwitcher currentRole={role} onRoleChange={setRole} />

          <div className="user-profile">
            <div className="avatar">
              <User size={20} />
            </div>
            <div className="user-info">
              <span className="user-name">John Doe</span>
              <span className="user-role">{role === 'admin' ? 'Administrator' : 'Standard User'}</span>
              <button 
                onClick={onLogout} 
                className="text-muted" 
                style={{ 
                  fontSize: '0.7rem', 
                  marginTop: '2px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '4px',
                  color: 'var(--danger)'
                }}
              >
                <User size={10} /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
