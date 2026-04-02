import React from 'react';
import { Wallet, TrendingUp, TrendingDown, PiggyBank } from 'lucide-react';
import './SummaryCards.css';

const icons = {
  Wallet: <Wallet size={24} />,
  ArrowUpRight: <TrendingUp size={24} />,
  ArrowDownRight: <TrendingDown size={24} />,
  PiggyBank: <PiggyBank size={24} />
};

const SummaryCard = ({ title, amount, trend, icon, type }) => {
  const isPositive = trend >= 0;
  
  return (
    <div className={`summary-card ${type}`}>
      <div className="card-header">
        <div className={`icon-container ${type}`}>
          {icons[icon]}
        </div>
        <div className={`trend-badge ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          <span>{Math.abs(trend)}%</span>
        </div>
      </div>
      
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-amount">
          ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>
      
      <div className="card-footer">
        <span className="text-muted">vs last month</span>
      </div>
    </div>
  );
};

export default SummaryCard;
