import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainContent from './components/MainContent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MainContent />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
