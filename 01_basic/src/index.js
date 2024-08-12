import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Section from './Section';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // fragment
  <>
    <App />
    <Section/>
  </>
);