import React from 'react';
import { FileText, Download, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import './Reports.css';

const reportData = [
  { id: 1, title: 'Q1 Financial Summary', date: 'March 31, 2026', type: 'Quarterly', size: '2.4 MB' },
  { id: 2, title: 'Annual Tax Statement 2025', date: 'Jan 15, 2026', type: 'Tax', size: '1.8 MB' },
  { id: 3, title: 'February Expense Analysis', date: 'Feb 28, 2026', type: 'Monthly', size: '4.1 MB' },
  { id: 4, title: 'Investment Portfolio Update', date: 'March 10, 2026', type: 'Investment', size: '3.2 MB' },
];

const Reports = () => {
  return (
    <div className="reports-section">
      <div className="reports-header-box">
        <div className="reports-header-text">
          <h3>Your Financial Documents</h3>
          <p>View, generate and download your official financial reports.</p>
        </div>
        <button className="btn-primary">
          <FileText size={16} />
          Generate New Report
        </button>
      </div>

      <div className="reports-grid">
        {/* Quick Stats */}
        <div className="report-stat-card">
          <div className="stat-icon"><DollarSign size={24} /></div>
          <div className="stat-info">
            <h4>Total Tax Withheld</h4>
            <span className="stat-value">$14,230</span>
          </div>
        </div>
        <div className="report-stat-card">
          <div className="stat-icon"><TrendingUp size={24} /></div>
          <div className="stat-info">
            <h4>YTD Growth</h4>
            <span className="stat-value">+8.4%</span>
          </div>
        </div>
        <div className="report-stat-card">
          <div className="stat-icon"><Calendar size={24} /></div>
          <div className="stat-info">
            <h4>Next Statement</h4>
            <span className="stat-value">April 30</span>
          </div>
        </div>
      </div>

      <div className="reports-list-container">
        <h3>Available Downloads</h3>
        <div className="reports-list">
          {reportData.map((report) => (
            <div key={report.id} className="report-item">
              <div className="report-icon-wrapper">
                <FileText size={20} className="report-icon" />
              </div>
              <div className="report-details">
                <span className="report-title">{report.title}</span>
                <span className="report-meta">{report.date} • {report.type} • {report.size}</span>
              </div>
              <button 
                className="btn-icon" 
                title="Download PDF"
                onClick={() => alert(`Simulating download of ${report.title}.pdf`)}
              >
                <Download size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
