import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import { SocketProvider } from './WebRTC/context/SocketProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
     <SocketProvider>
     <ToastContainer />
     <Routes>
      <Route path='*' element={ <App />} />
     </Routes>
     </SocketProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
