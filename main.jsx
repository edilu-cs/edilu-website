import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './whole.css'
import Display from './Display.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Display />
  </StrictMode>,
)
