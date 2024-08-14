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

function MyAPP(){
  return (
    <div>
      <h1>Hello, world! React Learning Journey</h1>
    </div>
  )
};

createRoot(document.getElementById('root')).render(
  <>
    <MyAPP/>
    <App/>
  </>
);
