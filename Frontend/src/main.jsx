import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import { Index } from './Pages/Index/index'
import {Profile} from './Pages/Profile/Profile'
import Login from './Pages/Login/Login'
import './Pages/Index/index.css'
import SignUp from './Pages/Login/SignUp'
import TokenContext from './Components/CustomHooks/TokenContext'

function App() {
  const [token, setToken] = useState('');
  const updateToken = (newToken) => {
    setToken(newToken);
  }
  return (
    <TokenContext.Provider value={{token,updateToken}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/index" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
