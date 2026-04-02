import React from 'react';
import { Lightbulb, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import './Insights.css';

const InsightCard = ({ title, description, type, icon: Icon }) => {
  return (
    <div className={`insight-card ${type}`}>
      <div className="insight-icon">
        <Icon size={24} />
      </div>
      <div className="insight-content">
        <h4 className="insight-title">{title}</h4>
        <p className="insight-desc">{description}</p>
      </div>
    </div>
  );
};

const Insights = ({ transactions }) => {
  const expenses = transactions.filter(t => t.type === 'expense');
  
  // Calculate highest spending category
  const categoryTotals = expenses.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {});
  const highestCategory = Object.keys(categoryTotals).sort((a, b) => categoryTotals[b] - categoryTotals[a])[0] || 'Unknown';

  // Calculate most frequent merchant
  const merchantCounts = expenses.reduce((acc, t) => {
    acc[t.merchant] = (acc[t.merchant] || 0) + 1;
    return acc;
  }, {});
  const topMerchant = Object.keys(merchantCounts).sort((a, b) => merchantCounts[b] - merchantCounts[a])[0] || 'Unknown';
  const topMerchantCount = merchantCounts[topMerchant] || 0;

  // Calculate total monthly spend logic (mocked trend)
  const totalSpend = expenses.reduce((sum, t) => sum + t.amount, 0);

  const insightsData = [
    {
      id: 1,
      title: 'Highest Spending Category',
      description: `Your highest spending this month was on ${highestCategory}. Consider reviewing these expenses.`,
      type: 'warning',
      icon: AlertCircle
    },
    {
      id: 2,
      title: 'Monthly Spending Trend',
      description: `Your total spending is $${totalSpend.toLocaleString()}. Try to stay within your budget to optimize savings.`,
      type: 'info',
      icon: TrendingUp
    },
    {
      id: 3,
      title: 'Frequent Merchant',
      description: `You visited ${topMerchant} ${topMerchantCount} times recently. Small recurring expenses can add up!`,
      type: 'success',
      icon: Lightbulb
    }
  ];

  return (
    <div className="insights-container">
      <div className="insights-grid">
        {insightsData.map(insight => (
          <InsightCard 
            key={insight.id}
            title={insight.title}
            description={insight.description}
            type={insight.type}
            icon={insight.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Insights;
