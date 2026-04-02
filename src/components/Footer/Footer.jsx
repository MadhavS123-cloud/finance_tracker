import React from 'react';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-nav">
      <div className="footer-content" style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
        <div className="footer-brand">
          <h2 className="logo-text" style={{ marginBottom: '16px' }}>Finora</h2>
          <p className="text-muted">Empowering your financial future with data-driven insights and effortless tracking.</p>
          <div className="social-links" style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            <Github size={20} className="text-muted" />
            <Twitter size={20} className="text-muted" />
            <Linkedin size={20} className="text-muted" />
            <Facebook size={20} className="text-muted" />
          </div>
        </div>
        
        <div className="footer-links">
          <h4 style={{ marginBottom: '20px' }}>Product</h4>
          <ul className="text-muted" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#demo">Live Demo</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 style={{ marginBottom: '20px' }}>Company</h4>
          <ul className="text-muted" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 style={{ marginBottom: '20px' }}>Legal</h4>
          <ul className="text-muted" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom" style={{ maxWidth: '1300px', margin: '60px auto 0', paddingTop: '30px', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
        <p className="text-muted">© 2026 Finora Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
