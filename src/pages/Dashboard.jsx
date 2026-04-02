import React from 'react';
import SummaryCard from '../components/SummaryCards/SummaryCard';
import Charts from '../components/Charts/Charts';
import Transactions from '../components/Transactions/Transactions';
import Insights from '../components/Insights/Insights';
import { summaryData, balanceHistory, expenseByCategory, incomeVsExpenses, transactions } from '../data/mockData';
import { Calendar, Download, RefreshCw, ArrowUpRight, Send, Plus, CreditCard } from 'lucide-react';
import './Dashboard.css';

const DashboardHeroCard = () => (
  <div className="dashboard-hero-card hover-lift">
    <div className="dhc-left">
      <div className="dhc-header">
        <span className="dhc-label">Total Portfolio Value</span>
        <span className="dhc-badge">+14.2% This Month</span>
      </div>
      <h1 className="dhc-balance">$142,500.00</h1>
      <p className="dhc-subtitle">You spent $3,240.50 so far this month, which is 12% lower than standard projections.</p>
      <div className="dhc-actions">
        <button className="btn-primary"><Send size={16}/> Transfer Funds</button>
        <button className="btn-secondary"><Plus size={16}/> Add Account</button>
      </div>
    </div>
    <div className="dhc-right">
      {/* We could place a mini sparkline here, for now a stylistic radial / abstract shape representing wealth */}
      <div className="abstract-wealth-indicator">
        <div className="awi-ring outer"></div>
        <div className="awi-ring inner"></div>
        <div className="awi-center"><CreditCard /></div>
      </div>
    </div>
  </div>
);

const Dashboard = ({ role }) => {
  return (
    <div className="dashboard-content">
      {/* Overview Action Bar */}
      <div className="dashboard-overview-header animate-slide-up">
        <div className="overview-title-group">
          <h2 className="overview-title">Welcome back, Alex.</h2>
          <p className="overview-subtitle">Here is your financial briefing for today.</p>
        </div>
        <div className="overview-actions">
           {role === 'admin' && (
             <button className="btn-tertiary hover-lift">
               <Download size={16} /> Export Reports
             </button>
           )}
          <button className="btn-tertiary hover-lift">
            <Calendar size={16} /> This Month
          </button>
        </div>
      </div>

      {/* Hero & Supporting Stats Configuration (Asymmetrical) */}
      <div className="top-metrics-grid animate-slide-up stagger-1">
        <div className="hero-metric-section">
          <DashboardHeroCard />
        </div>
        <div className="supporting-metrics-section">
           <SummaryCard 
            title="Monthly Income" 
            amount={summaryData.totalIncome.amount} 
            trend={summaryData.totalIncome.trend} 
            icon="ArrowUpRight"
            type="success"
          />
          <SummaryCard 
            title="Monthly Expenses" 
            amount={summaryData.totalExpenses.amount} 
            trend={summaryData.totalExpenses.trend} 
            icon="ArrowDownRight"
            type="primary"
          />
        </div>
      </div>

      {/* Analytics */}
      <div className="animate-slide-up stagger-2">
        <Charts 
          balanceHistory={balanceHistory} 
          expenseByCategory={expenseByCategory} 
          incomeVsExpenses={incomeVsExpenses} 
        />
      </div>

      {/* Transactions & Insights */}
      <div className="dashboard-main-grid animate-slide-up stagger-3">
        <div className="left-column">
          <Transactions transactions={transactions} role={role} />
        </div>
        <div className="right-column">
          <Insights transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
