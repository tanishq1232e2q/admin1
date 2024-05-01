import React from 'react'
import { useauth } from '../context/authcontext'
import { useState,useEffect } from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
export default function Adminusers() {
  const {authtoken}=useauth()
  const [allusers, setallusers] = useState([])

  const gellallusers=async()=>{
    const allusers=await fetch("http://localhost:8000/api/admin/users",{
      method:"GET",
      headers:{
        authorization:authtoken
      }
    })
    const data=await allusers.json()
    console.log(data);

    setallusers(data)

  }

  const deleteuser=async(id)=>{

    try {
      const response=await fetch(`http://localhost:8000/api/admin/users/delete/${id}`,{
        method:"DELETE",
        headers:{
          authorization:authtoken
        }
      })
      const data=await response.json()
      console.log(data);
      if (response.ok) {
        gellallusers()
      }
    } catch (error) {
      console.log(error);
    }
      
      
    }



  useEffect(() => {
  gellallusers()
    
  }, [])
  
  return (
    <div className='master'>
      <table className='tables'>
        <tr>
          <td style={{fontSize:"1.4rem"}}>Name</td>
          <td style={{fontSize:"1.4rem"}}>Email</td>
          <td style={{fontSize:"1.4rem"}}>Phone</td>
        </tr>
       

          {
            allusers.map((elem,index)=>{
              return <>
              
              <tr>
              <td>{elem.username}</td>
              <td>{elem.email}</td>
              <td>{elem.phone}</td>
              <td><Link to={`/admin/users/${elem._id}`}>Edit</Link></td>
              <td><button onClick={()=>deleteuser(elem._id)}>delete</button></td>
              </tr>
              </>

            })
          }
      </table>
    </div>
  )
}
