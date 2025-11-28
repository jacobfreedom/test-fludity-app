import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initViewportHeight } from 'vh-calculation-fix'

// Initialize CSS variables --svh and --lvh for the demo
initViewportHeight({ updateOnFocus: true })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
