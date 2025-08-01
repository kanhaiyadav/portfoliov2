import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeProvider from './Providers/ThemeProvider.tsx'
import { ModalProvider } from './context/modalManager.tsx'
import { ModalManager } from './components/shared/Modals/ModalManager.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <ModalProvider>
                <App />
                <ModalManager />
            </ModalProvider>
        </ThemeProvider>
    </StrictMode>,
)
