import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import CounterApp from "./Counter.jsx";
import DependencyArray from './DependencyArray'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <CounterApp />
    <DependencyArray />
  // </StrictMode>,
)
