import React from 'react'
import { useauth } from '../context/authcontext'
import "../App.css"
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function Adminupdate() {
    const {id}=useParams()
    const navi=useNavigate()
    const {authtoken}=useauth()
    const [getuser, setgetuser] = useState({
      username:"",
      email:"",
      phone:"",
    })
    const getuserforupdate=async()=>{
      try {
        
        const response=await fetch(`${window.location.origin}/api/admin/users/${id}`,{
            method:"GET",
            headers:{
                authorization:authtoken
            }
        })
        const data=await response.json()
        console.log(data);
        setgetuser(data[0])
        console.log(getuser);
      } catch (error) {
        console.log(error);
      }
    }
    const handleinput=(e)=>{
     const value=e.target.value
     const name=e.target.name
     setgetuser({...getuser,[name]:value})
     console.log(getuser);
    }

    const updatefun=async(e)=>{

      try {
        
        e.preventDefault()
        const response=await fetch(`${window.location.origin}/api/admin/users/update/${id}`,{
              method:"PUT",
              headers:{
                "Content-Type":"application/json",
                  authorization:authtoken
              },
              body:JSON.stringify(getuser)
          })
          if (response.ok) {
            navi("/admin/users")
          }
         
          console.log(getuser);
      } catch (error) {
        console.log(error);
      }
    }



    useEffect(() => {
      getuserforupdate()
    
      
    }, [])
    
  return (
    <div>
      <form onSubmit={updatefun}  action="">

      <div class="register-form">
        <div >
          <label for="exampleFormControlInput1" class="form-label">Usename</label>
          <input type="text" name='username' required={true} value={getuser.username} onChange={handleinput} id="username" class="form-control" placeholder="tanishq" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input type="email" name='email' required={true} id="email" value={getuser.email} onChange={handleinput} class="form-control" placeholder="name@example.com" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Phone</label>
          <input type="number" name='phone' required={true} value={getuser.phone} onChange={handleinput} id="phone" class="form-control" placeholder="91+" />
        </div>
       

        <button type='submit' className='btn'>Update</button>
      </div>

    </form>
    </div>
  )
}


