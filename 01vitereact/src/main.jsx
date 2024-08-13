import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'Google'
);

createRoot(document.getElementById('root')).render(
    reactElement
  // <StrictMode>
  //   {/* Uncomment the line below if you want to render the App component */}
  //   {/* <App /> */}
  // </StrictMode>
);
