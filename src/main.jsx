import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ClientContextProvider } from './contexts/ClientContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClientContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClientContextProvider>
  </React.StrictMode>,
)
