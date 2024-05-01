import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import { useParams } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Error from './pages/Error'
import Adminusers from "./pages/Adminusers"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Admincontact from './pages/Admincontact'
import Adminlayout from './components/Adminlayout'
import Adminupdate from './pages/Adminupdate'
function App() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/admin' element={<Adminlayout/>}>
          <Route path="users" element={<Adminusers/>}/>
          <Route path="users/:id" element={<Adminupdate/>}/>
          <Route path="contacts" element={<Admincontact/>}/>
        </Route>

        
      </Routes>

      <Footer/>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
