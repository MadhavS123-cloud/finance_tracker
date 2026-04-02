import React from 'react';
import { User, Settings } from 'lucide-react';
import './RoleSwitcher.css';

const RoleSwitcher = ({ currentRole, onRoleChange }) => {
  return (
    <div className="role-switcher-container">
      <div className="role-label">
        {currentRole === 'admin' ? <User size={16} /> : <Settings size={16} />}
        <span>Mode</span>
      </div>
      <select 
        value={currentRole} 
        onChange={(e) => onRoleChange(e.target.value)}
        className="role-select"
      >
        <option value="user">User View</option>
        <option value="admin">Admin View</option>
      </select>
    </div>
  );
};

export default RoleSwitcher;
