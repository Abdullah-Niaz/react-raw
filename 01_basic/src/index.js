import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Section from './Section';


const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Google'
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // fragment
  <>
    <App />
    reactElement
    <Section/>
  </>
);