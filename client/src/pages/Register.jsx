import React, { useState } from 'react'
import "../App.css"
import { useauth } from '../context/authcontext'
import {useNavigate} from "react-router-dom"

export default function Register() {

  const [user, setuser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  })
  const {storetoken}=useauth()

  const navigate=useNavigate()
  const submitform = async (e) => {

    try {

      e.preventDefault()
      console.log(user);
      
      const response = await fetch(`${window.location.origin}/api/auth/register`, {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

      })

      console.log(response);
      if (response.ok) {
        const resdata=await response.json();
        console.log(resdata.token);

        console.log(resdata);
        // localStorage.setItem("token",resdata.token)
        storetoken(resdata.token)
        setuser({
          username: "",
          email: "",
          phone: "",
          password: ""
        })

        navigate("/")
      }
      else if(user.phone.length!=10){
        alert("incorrect phone")
      }
      else{
        alert("user email already exist")
      }
      
      


    } catch (error) {
      console.log(error);
    }

  }

  const handleinput = (e) => {
    let value = e.target.value
    let name = e.target.name
    console.log(name);
    setuser({ ...user, [name]: value })
    console.log(user);
  }





  return (

    <form onSubmit={submitform} action="">

      <div class="register-form">
        <div >
          <label for="exampleFormControlInput1" class="form-label">Usename</label>
          <input type="text" name='username' required={true} value={user.username} onChange={handleinput} id="username" class="form-control" placeholder="tanishq" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input type="email" name='email' required={true} id="email" value={user.email} onChange={handleinput} class="form-control" placeholder="name@example.com" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Phone</label>
          <input type="number" name='phone' required={true} value={user.phone} onChange={handleinput} id="phone" class="form-control" placeholder="91+" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password</label>
          <input type="password" required={true} name='password' value={user.password} onChange={handleinput} id="password" class="form-control" placeholder="xxxxxx" />
        </div>

        <button className='btn'>Register</button>
      </div>

    </form>
  )
}
