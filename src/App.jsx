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
import Payment from './assets/pages/Payment'
import Auth from './assets/pages/Auth'
import AuthProvider from './context/AuthContext'
import ProductDetails from './assets/pages/ProductDetails'
import CartProvider from './context/CartContext'
import Checkout from './assets/pages/checkout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <CartProvider>
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/about" element={<About />}/>
        <Route path ="/auth" element={<Auth />}/>
        <Route path="/checkout" element = {<Checkout/>}/> 
        <Route path ="/contact" element={<Contact/>} />
        <Route path ="/material" element={< Material/>} />
        <Route path ="/professional" element={< Professional/>} />
        <Route path ="/payment" element={< Payment/>} />
        <Route path ="/project" element={<Project/>}/>
        <Route path ="/services" element={<Services/>} />
        <Route path="/products/:id" element={ <ProductDetails/> }/>
        <Route path="/product/:id" element={ <ProductDetails/> }/>
      </Routes>
    </div>
      </CartProvider>
    </AuthProvider>

    
  )
}

export default App
