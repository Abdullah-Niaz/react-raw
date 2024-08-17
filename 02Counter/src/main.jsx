import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './Counter.jsx'
import NewCounter from './NewCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter/>
    <NewCounter/>
  </StrictMode>,
)
