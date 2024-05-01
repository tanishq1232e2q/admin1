import React from 'react'
import { useauth } from '../context/authcontext'
import { useState,useEffect } from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
export default function Admincontact() {
  const {authtoken}=useauth()
  const [allconatcts, setallcontacts] = useState([])

  const gellallcontacts=async()=>{
    const response=await fetch(`${window.location.origin}/api/admin/contacts`,{
      method:"GET",
      headers:{
        authorization:authtoken
      }
    })
    const data=await response.json()
    console.log(data);

    setallcontacts(data)

  }

 



  useEffect(() => {
  gellallcontacts()
    
  }, [])
  
  return (
    <div className='master'>
      <table className='tables'>
        <tr>
          <td style={{fontSize:"1.4rem"}}>Name</td>
          <td style={{fontSize:"1.4rem"}}>Email</td>
          <td style={{fontSize:"1.4rem"}}>messages</td>
        </tr>
       

          {
            allconatcts.map((elem,index)=>{
              return <>
              
              <tr>
              <td>{elem.username}</td>
              <td>{elem.email}</td>
              <td>{elem.message}</td>
              {/* <td><Link to={`/admin/users/${elem._id}`}>Edit</Link></td> */}
              {/* <td><button onClick={()=>deleteuser(elem._id)}>delete</button></td> */}
              </tr>
              </>

            })
          }
      </table>
    </div>
  )
}
