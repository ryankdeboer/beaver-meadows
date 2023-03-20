import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ScrollToTop from "./components/ScrollToTop";
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
)
