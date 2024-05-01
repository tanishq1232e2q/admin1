// import { useEffect } from 'react'
import React,{useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { useauth } from '../context/authcontext'
export default function Logout() {

    const {Logoutuser}=useauth()

    useEffect(() => {
        Logoutuser()
        window.location.reload()

    }, [Logoutuser])

    // const navigate=useNavigate()
  return <Navigate to="/"/>
}
