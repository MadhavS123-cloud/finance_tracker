import React, { useState } from 'react';
import { Search, HelpCircle, MessageCircle, Book, X, ChevronRight, ExternalLink } from 'lucide-react';
import './HelpCenter.css';

const HelpCenter = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "How do I connect my bank account?",
      answer: "Go to Settings > Accounts and click on 'Connect New Bank'. Follow the encrypted portal instructions to link your financial institution.",
      category: "Getting Started"
    },
    {
      question: "Can I export my financial data?",
      answer: "Yes, you can export reports and transactions in CSV or PDF format from the Reports and Transactions pages respectively.",
      category: "Data & Reports"
    },
    {
      question: "How is my data secured?",
      answer: "Finora uses AES-256 encryption and SOC2 compliant infrastructure to ensure your financial data is always private and secure.",
      category: "Security"
    },
    {
      question: "What are 'Insights'?",
      answer: "Insights use smart algorithms to analyze your spending habits and suggest budget optimizations tailored to your lifestyle.",
      category: "Features"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="help-center-overlay" onClick={onClose}>
      <div className="help-center-modal" onClick={e => e.stopPropagation()}>
        <header className="help-header">
          <div className="header-icon-group">
            <HelpCircle className="help-icon" size={24} />
            <h2>Help Center</h2>
          </div>
          <button className="close-btn" onClick={onClose}><X size={20} /></button>
        </header>

        <div className="help-search">
          <Search size={18} />
          <input 
            type="text" 
            placeholder="How can we help you today?" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>

        <div className="help-sections">
          <div className="help-grid">
            <div className="help-card">
              <Book size={20} className="card-icon" />
              <h3>Documentation</h3>
              <p>Detailed guides on every feature of Finora.</p>
              <button className="text-btn">Browse Docs <ChevronRight size={14} /></button>
            </div>
            <div className="help-card">
              <MessageCircle size={20} className="card-icon" />
              <h3>Direct Support</h3>
              <p>Chat with our financial experts 24/7.</p>
              <button className="text-btn">Start Chat <ChevronRight size={14} /></button>
            </div>
          </div>

          <div className="faq-section">
            <h4 className="section-title">Frequently Asked Questions</h4>
            <div className="faq-list">
              {filteredFaqs.length > 0 ? filteredFaqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <span className="faq-category">{faq.category}</span>
                  <p className="faq-question">{faq.question}</p>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              )) : (
                <p className="no-results">No matches found for "{searchQuery}"</p>
              )}
            </div>
          </div>
        </div>

        <footer className="help-footer">
          <p>Still need help? <a href="#">Visit our Community Forum <ExternalLink size={12} /></a></p>
        </footer>
      </div>
    </div>
  );
};

export default HelpCenter;
