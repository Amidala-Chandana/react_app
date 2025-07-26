import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import LoginPage from './Voteapp/LoginPage.jsx'
// import RegisterPage from './Voteapp/RegisterPage.jsx'
import VotingApp from './Voteapp/VotingApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    
    <VotingApp/>
  </StrictMode>,
)
