import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const hiddenHeaderRoutes = ['/case-studies/'];

  // Check if current route should hide header (case study detail pages)
  const shouldHideHeader = hiddenHeaderRoutes.some(route =>
    location.pathname.includes(route) && location.pathname !== '/case-studies'
  );

  return (
    <div className="app-layout">
      {!shouldHideHeader && <Header />}
      <main className="main-content">
        {children}
      </main>
      {!shouldHideHeader && <Footer />}
    </div>
  );
};

export default Layout;