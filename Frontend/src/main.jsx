import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import Index from './Pages/Index/index'
import Profile from './Pages/Profile/Profile'
import Login from './Pages/Login/Login'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element={<Index/>}/>
    <Route path = "/Profile" element={<Profile/>}/>
    <Route path = "/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
