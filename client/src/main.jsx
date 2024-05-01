import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Authprovider } from './context/authcontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Authprovider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Authprovider>
)
