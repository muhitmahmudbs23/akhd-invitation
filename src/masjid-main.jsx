import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MasjidInvite from './MasjidInvite.jsx'
import './masjid.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MasjidInvite />
  </StrictMode>,
)
