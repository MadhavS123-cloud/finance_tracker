import React from 'react';
import { SearchX } from 'lucide-react';
import './EmptyState.css';

const EmptyState = ({ title, message }) => {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <SearchX size={48} strokeWidth={1.5} />
      </div>
      <h3 className="empty-title">{title}</h3>
      <p className="empty-message">{message}</p>
    </div>
  );
};

export default EmptyState;
