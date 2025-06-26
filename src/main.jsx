import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Optional: Bootstrap JS (if you use modals/tooltips)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Custom global styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
