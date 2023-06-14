import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

//Integracao do react com html, (representacao do html atraves do js- Document Object Model DOM)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
