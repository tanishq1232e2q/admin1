import React from 'react'
import { Link } from 'react-router-dom'
import { useauth } from '../context/authcontext'
export default function Navbar() {
  const {isloggedin}=useauth()
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
      
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/services">Services</Link>
        </li>
        {
          isloggedin ?
          <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/logout">LogOut</Link>
        </li>
        : <>
          <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/register">Register</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        </>
        }
        <button style={{backgroundColor:"yellow"}} disabled={!isloggedin} class="btn btn-primary">
        <Link class="nav-link active" aria-current="page" to="/admin">Admin</Link>
        </button>
        
       
       
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}
