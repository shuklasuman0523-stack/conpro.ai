import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// Scroll effects disabled
// import setupRevealOnScroll from './hooks/useRevealOnScroll';

// Scroll effects disabled
// if (typeof window !== 'undefined') setupRevealOnScroll();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
