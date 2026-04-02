import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Dashboard from '../pages/Dashboard';
import Transactions from '../components/Transactions/Transactions';
import Insights from '../components/Insights/Insights';
import Reports from '../components/Reports/Reports';
import Settings from '../components/Settings/Settings';
import { transactions } from '../data/mockData';

const DashboardLayout = ({ 
  role, setRole, activeTab, setActiveTab, 
  isSidebarCollapsed, setIsSidebarCollapsed, 
  theme, toggleTheme, logout 
}) => {
  const getPageTitle = () => {
    switch(activeTab) {
      case 'dashboard': return 'Financial Overview';
      case 'transactions': return 'Transaction History';
      case 'insights': return 'Spending Insights';
      case 'reports': return 'Financial Reports';
      case 'settings': return 'Account Settings';
      default: return 'Dashboard';
    }
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <Dashboard role={role} />;
      case 'transactions':
        return <Transactions transactions={transactions} role={role} />;
      case 'insights':
        return <Insights transactions={transactions} />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings theme={theme} toggleTheme={toggleTheme} />;
      default:
        return (
          <div className="placeholder-content">
            <h2>{getPageTitle()}</h2>
            <p className="text-muted">This section is currently under development.</p>
          </div>
        );
    }
  };

  return (
    <div className={`app-container ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        setIsCollapsed={setIsSidebarCollapsed} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      <main className="main-layout">
        <Header 
          title={getPageTitle()} 
          role={role} 
          setRole={setRole}
          theme={theme}
          toggleTheme={toggleTheme}
          onLogout={logout}
        />
        
        <div className="content-area">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
