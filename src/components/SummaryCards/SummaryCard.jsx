import React, { useState, useEffect } from 'react';
import { Wallet, TrendingUp, TrendingDown, PiggyBank } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import './SummaryCards.css';

const icons = {
  Wallet: <Wallet size={24} />,
  ArrowUpRight: <TrendingUp size={24} />,
  ArrowDownRight: <TrendingDown size={24} />,
  PiggyBank: <PiggyBank size={24} />
};

const NumberCounter = ({ value, isPercentage }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let startTime = null;
    const duration = 1500; // 1.5 seconds

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function: easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(start + (end - start) * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <>
      {isPercentage ? '' : '$'}
      {count.toLocaleString('en-US', { 
        minimumFractionDigits: 0, 
        maximumFractionDigits: (count % 1 === 0) ? 0 : 1 
      })}
      {isPercentage ? '%' : ''}
    </>
  );
};

const getSparklineData = (isPositive) => {
  if (isPositive) {
    return [{v: 10}, {v: 15}, {v: 12}, {v: 25}, {v: 22}, {v: 35}, {v: 40}];
  }
  return [{v: 40}, {v: 35}, {v: 38}, {v: 25}, {v: 22}, {v: 15}, {v: 10}];
}

const SummaryCard = ({ title, amount, trend, icon, type, isPercentage = false }) => {
  const isPositive = trend >= 0;
  const sparklineData = getSparklineData(isPositive);
  const sparklineColor = isPositive ? '#10B981' : '#ef4444';
  
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
        <p className="card-amount mono-numbers">
          <NumberCounter value={amount} isPercentage={isPercentage} />
        </p>
      </div>
      
      <div className="card-sparkline">
        <ResponsiveContainer width="100%" height={40}>
          <AreaChart data={sparklineData}>
             <defs>
              <linearGradient id={`sparkline-${title}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={sparklineColor} stopOpacity={0.2}/>
                <stop offset="95%" stopColor={sparklineColor} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="v" stroke={sparklineColor} strokeWidth={2} fillOpacity={1} fill={`url(#sparkline-${title})`} isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="card-footer">
        <span className="text-muted">vs last month</span>
      </div>
    </div>
  );
};

export default SummaryCard;
