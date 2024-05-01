import React from 'react'
import "../App.css"
import { Link,Outlet } from 'react-router-dom'
import { useauth } from '../context/authcontext'
import { Navigate } from 'react-router-dom'
export default function Adminlayout() {
  const {user}=useauth()

  if (!user.isadmin) {
    return <Navigate to="/"/>
  }
  return (
    <div>
     <header>
      <div className="container">
        <h1>Admin Panel</h1>
        <ul style={{display:"flex"}}>
          <li >

            <Link to="/admin/users">Users</Link>
          </li>
          <li><Link to="/admin/contacts">Conatcts</Link></li>
          <li><Link to="/admin/contacts">services</Link></li>
          <li></li>
        </ul>
      </div>
     </header>
     <Outlet/>
    </div>
  )
}
