import React from 'react';
import { Home, List, PieChart, BarChart2, Settings, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, setIsCollapsed, activeTab, setActiveTab, onHelpClick }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { id: 'transactions', label: 'Transactions', icon: <List size={20} /> },
    { id: 'insights', label: 'Insights', icon: <PieChart size={20} /> },
    { id: 'reports', label: 'Reports', icon: <BarChart2 size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-section">
          <div className="logo-icon">F</div>
          {!isCollapsed && <span className="logo-text">Finora</span>}
        </div>
        <button 
          className="toggle-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="icon">{item.icon}</span>
                {!isCollapsed && <span className="label">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="nav-item help-btn" onClick={onHelpClick}>
          <span className="icon"><HelpCircle size={20} /></span>
          {!isCollapsed && <span className="label">Help Center</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
