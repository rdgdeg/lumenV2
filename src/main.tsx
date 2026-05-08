import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@/hooks/useTheme'
import './index.css'
import App from './App.tsx'

const savedTheme = localStorage.getItem('lumen-theme') || 'warm'
document.documentElement.classList.add(`theme-${savedTheme}`)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <HashRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HashRouter>
    </HelmetProvider>
  </StrictMode>,
)
