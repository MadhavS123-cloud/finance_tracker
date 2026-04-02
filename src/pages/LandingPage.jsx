import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { 
  BarChart, Wallet, CreditCard, PieChart, 
  ArrowRight, Shield, Zap, Layout 
} from 'lucide-react';
import '../styles/landing.css';

const StatCard = ({ number, label, delayClass }) => (
  <div className={`stat-item animate-slide-up ${delayClass}`}>
    <span className="stat-number">{number}</span>
    <span className="stat-label">{label}</span>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, delayClass }) => (
  <div className={`feature-card hover-lift animate-slide-up ${delayClass}`}>
    <div className="icon-container primary">
      <Icon size={24} />
    </div>
    <h3>{title}</h3>
    <p className="text-muted">{description}</p>
  </div>
);

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <section className="hero">
        <div className="hero-content animate-slide-up">
          <div className="hero-badge hover-lift">
            <span className="badge-highlight">New</span> Introducing Finora Pro
          </div>
          <h1 className="hero-title">
            Take Back Control Of Your <span className="text-gradient">Financial Future</span>
          </h1>
          <p className="hero-subtitle">
            The premium all-in-one finance dashboard for modern professionals. 
            Manage transactions, analyze spending patterns, and reach your goals effortlessly.
          </p>
          <div className="hero-ctas">
            <Link to="/signup" className="btn-hero-primary hover-lift">
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link to="/dashboard" className="btn-hero-secondary hover-lift">
              View Demo
            </Link>
          </div>
        </div>
        <div className="hero-image animate-slide-up stagger-2">
          <div className="mockup-frame hover-lift">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
              alt="Dashboard Preview" 
              className="dashboard-mockup"
            />
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-grid">
          <StatCard number="$2B+" label="Transactions Managed" delayClass="stagger-1" />
          <StatCard number="99%" label="Visualization Accuracy" delayClass="stagger-2" />
          <StatCard number="Bank-level" label="Encrypted Security" delayClass="stagger-3" />
          <StatCard number="Instant" label="Financial Syncing" delayClass="stagger-4" />
        </div>
      </section>

      <section id="features" className="features">
        <div className="section-header animate-slide-up">
          <h2 className="section-title">Everything you need, nothing you don't.</h2>
          <p className="text-muted">Designed specifically to cut out the noise and give you pure, actionable insights.</p>
        </div>
        <div className="features-grid">
          <FeatureCard 
            icon={Layout} 
            title="Sleek Overview" 
            description="A premium high-level view of your balance, income, and expenses updated in real-time."
            delayClass="stagger-1"
          />
          <FeatureCard 
            icon={CreditCard} 
            title="Smart Tracking" 
            description="Log and categorize every transaction with zero friction and beautiful UI tables."
            delayClass="stagger-2"
          />
          <FeatureCard 
            icon={PieChart} 
            title="Deep Insights" 
            description="Analyze your spending patterns with interactive, handcrafted visualizations."
            delayClass="stagger-3"
          />
          <FeatureCard 
            icon={Shield} 
            title="Secure Vault" 
            description="Switch between Admin and User views securely, knowing your data is encrypted."
            delayClass="stagger-4"
          />
          <FeatureCard 
            icon={BarChart} 
            title="Clean Analytics" 
            description="Professional-grade financial reports exported in one click for tax season."
            delayClass="stagger-1"
          />
          <FeatureCard 
            icon={Zap} 
            title="Lightning Fast" 
            description="A single-page architecture ensures zero loading screens between dashboard tabs."
            delayClass="stagger-2"
          />
        </div>
      </section>

      <section className="how-it-works padding-block bg-white">
        <div className="section-header animate-slide-up">
          <h2 className="section-title">Three steps to financial clarity</h2>
        </div>
        <div className="steps-grid">
          <div className="step animate-slide-up stagger-1">
            <div className="step-num">1</div>
            <h3>Connect & Sync</h3>
            <p className="text-muted">Import your daily financial activities instantly.</p>
          </div>
          <div className="step animate-slide-up stagger-2">
            <div className="step-num">2</div>
            <h3>Categorize Smartly</h3>
            <p className="text-muted">Monitor where your money goes with our beautiful interface.</p>
          </div>
          <div className="step animate-slide-up stagger-3">
            <div className="step-num">3</div>
            <h3>Grow Wealth</h3>
            <p className="text-muted">Use intelligent insights to make better financial decisions.</p>
          </div>
        </div>
      </section>

      <div id="demo" className="preview-section padding-block">
        <div className="section-header animate-slide-up">
          <h2 className="section-title">Experience the Platform</h2>
        </div>
        <div className="browser-frame wrapper-lg hover-lift animate-slide-up stagger-2">
          <div className="browser-header">
            <span className="dot bg-danger"></span>
            <span className="dot bg-warning"></span>
            <span className="dot bg-success"></span>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
            alt="App Preview" 
            className="browser-img"
          />
        </div>
      </div>

      <section className="cta-footer">
        <div className="cta-content animate-slide-up">
          <h2 className="cta-title">Ready to master your finances?</h2>
          <p className="cta-subtitle">Join 10,000+ top professionals who upgraded from boring spreadsheets to Finora.</p>
          <div className="hero-ctas justify-center">
            <Link to="/signup" className="btn-hero-secondary hover-lift">Sign Up Now For Free</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
