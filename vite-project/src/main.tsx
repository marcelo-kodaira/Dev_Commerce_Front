import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './contexts'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components';
import { variables } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={variables}>
      <BrowserRouter>
          <AppProvider>
            <App />
          </AppProvider>
          <ToastContainer/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
