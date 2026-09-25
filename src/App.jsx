import './App.css'
import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Navbar from './assets/component/navbar'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'
import Material from './assets/pages/Material'
import Project from './assets/pages/Project'
import Services from './assets/pages/Services'
import Professional from './assets/pages/Professional'
import Auth from './assets/pages/Auth'
import AuthProvider from './context/AuthContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/About" element={<About />}/>
        <Route path ="/Auth" element={<Auth />}/>
        <Route path ="/Contact" element={<Contact/>} />
        <Route path ="/Material" element={< Material/>} />
        <Route path ="/Professional" element={< Professional/>} />
        <Route path ="/Project" element={<Project/>}/>
        <Route path ="/Services" element={<Services/>} />
      </Routes>
    </div>
    </AuthProvider>

    
  )
}

export default App
