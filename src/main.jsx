import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';           // ✅ This was missing
import About from './pages/About.jsx'; // ✅ About route works
import Contact from "./pages/Contact.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);