import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// Setup global reveal-on-scroll observer
import setupRevealOnScroll from './hooks/useRevealOnScroll';

// initialize (returns a cleanup function if needed)
if (typeof window !== 'undefined') setupRevealOnScroll();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);