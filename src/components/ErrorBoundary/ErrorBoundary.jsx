import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'monospace', background: '#fff0f0', margin: '20px', borderRadius: '8px', border: '1px solid #ff0000' }}>
          <h2 style={{ color: '#cc0000' }}>Something went wrong!</h2>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#333', marginTop: '16px' }}>
            {this.state.error && this.state.error.toString()}
          </pre>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#666', marginTop: '8px', fontSize: '12px' }}>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
