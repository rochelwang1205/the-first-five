import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/theme.scss";   // 取代 import "bootstrap/dist/css/bootstrap.min.css"，自定義樣式
import "./styles/global.css"; 
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
