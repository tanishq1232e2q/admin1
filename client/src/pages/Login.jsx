import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "../App.css"
import { useauth } from '../context/authcontext'
export default function Login() {

  const [user, setuser] = useState({
   
    email:"",
  
    password:""
  })
  const navigate=useNavigate()
  const {storetoken}=useauth()

  const submitform=async(e)=>{
    try {

      e.preventDefault()
      console.log(user);
      
      const response = await fetch(`http://localhost:8000/api/auth/login`, {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

      })

      console.log(response);
      if (response.ok) {
        const resdata=await response.json();
        console.log(resdata);
        window.location.reload()
        
        // localStorage.setItem("token",resdata.token)
        storetoken(resdata.token)

        alert('logined success')
        setuser({
          
          email: "",
          
          password: ""
        })
      }
      else{
        alert("invalid credentials")
      }
      

    } catch (error) {
      console.log(error);
    }

  }
  

  const handleinput=(e)=>{
    let value=e.target.value
    let name=e.target.name
    console.log(name);
    setuser({...user,[name]:value})
    console.log(user);
  }





  return (

    <form onSubmit={submitform} action="">

      <div class="register-form">
     
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input type="email" name='email' id="email" value={user.email} onChange={handleinput} class="form-control" placeholder="name@example.com" />
        </div>
       
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password</label>
          <input type="password" name='password'value={user.password} onChange={handleinput} id="password" class="form-control" placeholder="xxxxxx" />
        </div>

        <button className='btn'>Login</button>
      </div>

    </form>
  )

}