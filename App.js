import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Home, About, Services, Products, Testimonials } from './pages';
import './styles/index.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </Layout>
      </div>
    </HashRouter>
  );
}

export default App;
