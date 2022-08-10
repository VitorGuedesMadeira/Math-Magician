import React from 'react';
import ReactDOM from 'react-dom/client';
// router
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>,
);
