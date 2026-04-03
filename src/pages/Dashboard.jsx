import React from 'react';
import SummaryCard from '../components/SummaryCards/SummaryCard';
import Charts from '../components/Charts/Charts';
import Transactions from '../components/Transactions/Transactions';
import Insights from '../components/Insights/Insights';
import { summaryData, balanceHistory, expenseByCategory, incomeVsExpenses, transactions } from '../data/mockData';
import { Calendar, Download, RefreshCw, ArrowUpRight, Send, Plus, CreditCard } from 'lucide-react';
import './Dashboard.css';

const Dashboard = ({ role }) => {
  return (
    <div className="dashboard-content">
      {/* Overview Action Bar */}
      <div className="dashboard-overview-header animate-slide-up">
        <div className="overview-title-group">
          <p className="overview-pretitle">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <h2 className="overview-title">Welcome back, <span className="text-gradient">Alex</span>.</h2>
          <p className="overview-subtitle">Here's what's happening with your finances today.</p>
        </div>
        <div className="overview-actions">
           {role === 'admin' && (
             <button className="btn-secondary hover-lift">
               <Download size={16} /> Export Reports
             </button>
           )}
          <button className="btn-primary hover-lift">
            <Plus size={16} /> New Transaction
          </button>
        </div>
      </div>

      {/* 4 Summary Cards Grid */}
      <div className="summary-metrics-grid animate-slide-up stagger-1">
        <SummaryCard 
          title="Total Balance" 
          amount={summaryData.totalBalance.amount} 
          trend={summaryData.totalBalance.trend} 
          icon={summaryData.totalBalance.icon}
          type="primary"
        />
        <SummaryCard 
          title="Monthly Income" 
          amount={summaryData.monthlyIncome.amount} 
          trend={summaryData.monthlyIncome.trend} 
          icon={summaryData.monthlyIncome.icon}
          type="success"
        />
        <SummaryCard 
          title="Monthly Expenses" 
          amount={summaryData.monthlyExpenses.amount} 
          trend={summaryData.monthlyExpenses.trend} 
          icon={summaryData.monthlyExpenses.icon}
          type="danger"
        />
        <SummaryCard 
          title="Savings Rate" 
          amount={summaryData.savingsRate.amount} 
          trend={summaryData.savingsRate.trend} 
          icon={summaryData.savingsRate.icon}
          type="warning"
          isPercentage={true}
        />
      </div>

      {/* Analytics */}
      <div className="animate-slide-up stagger-2">
        <Charts 
          balanceHistory={balanceHistory} 
          expenseByCategory={expenseByCategory} 
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
