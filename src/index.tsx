import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <div>
    <Router>
      <App />
    </Router>
  </div>,
  document.getElementById('root')
);
