import React, { useState, useMemo } from 'react';
import { Search, Filter, Download, MoreHorizontal, ArrowUp, ArrowDown } from 'lucide-react';
import './Transactions.css';
import EmptyState from '../EmptyState/EmptyState';

const Transactions = ({ transactions, role }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           t.merchant.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || t.category === categoryFilter;
      const matchesType = typeFilter === 'All' || t.type === typeFilter;
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [transactions, searchTerm, categoryFilter, typeFilter]);

  const categories = ['All', ...new Set(transactions.map(t => t.category))];

  const handleExportCSV = () => {
    if (filteredTransactions.length === 0) return;
    
    const headers = ['Date', 'Merchant', 'Description', 'Category', 'Type', 'Amount', 'Status'];
    const csvRows = filteredTransactions.map(t => {
      return [
        t.date,
        `"${t.merchant}"`,
        `"${t.description}"`,
        t.category,
        t.type,
        t.amount,
        t.status
      ].join(',');
    });
    
    const csvString = [headers.join(','), ...csvRows].join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'transactions_export.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="transactions-section">
      <div className="section-header">
        <h2 className="title-card">Recent Transactions</h2>
        <div className="header-actions">
          {role === 'admin' && (
            <button className="btn-secondary" onClick={handleExportCSV}>
              <Download size={16} />
              <span>Export CSV</span>
            </button>
          )}
        </div>
      </div>

      <div className="filter-bar">
        <div className="search-input">
          <Search size={16} />
          <input 
            type="text" 
            placeholder="Search transactions..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filters">
          <div className="filter-group">
            <Filter size={16} />
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="All">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        {filteredTransactions.length > 0 ? (
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map(t => (
                <tr key={t.id} className="transaction-row">
                  <td>{new Date(t.date).toLocaleDateString()}</td>
                  <td>
                    <div className="merchant-info">
                      <span className="merchant-name">{t.merchant}</span>
                      <span className="description">{t.description}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`category-badge ${t.category.toLowerCase()}`}>{t.category}</span>
                  </td>
                  <td>
                    <span className={`type-badge ${t.type}`}>
                      {t.type === 'income' ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                      {t.type}
                    </span>
                  </td>
                  <td className={`amount ${t.type}`}>
                    {t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString()}
                  </td>
                  <td>
                    <span className={`status-dot ${t.status}`}></span>
                    {t.status}
                  </td>
                  <td>
                    <button className="action-btn"><MoreHorizontal size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <EmptyState 
            title="No transactions found" 
            message="Try adjusting your search or filters to find what you're looking for." 
          />
        )}
      </div>
    </div>
  );
};

export default Transactions;
