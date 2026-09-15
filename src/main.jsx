import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { asset } from './asset.js'

document.documentElement.style.setProperty(
  '--paper',
  `url('${asset('paper-texture.png')}')`,
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
