import React,{useState} from 'react'
import "../App.css"
import { useauth } from '../context/authcontext'
export default function Register() {

  const [userdata, setuserdata] = useState(true)
  const {user}=useauth();
  const [contact, setconatct] = useState({
    username:"",
    email:"",
    
    message:""
  })

  const submitform=async(e)=>{
    e.preventDefault()
    console.log(contact);

    try {
      const response= await fetch("http://localhost:8000/api/auth/contact/",{
        method:"POST",
        headers:{

          "Content-Type":"application/json"
        },
        body:JSON.stringify(contact)

      })
      if (response.ok) {
        const data=await response.json()
        console.log(data);
        alert("details saved")
        setconatct({
          username:"",
          email:"",
          message:""
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (userdata && user) {
    setconatct({
      username:user.username,
      email:user.email,
      message:""
    })

    setuserdata(false)
  }



  const handleinput=(e)=>{
    let value=e.target.value
    let name=e.target.name
    console.log(name);
    setconatct({...contact,[name]:value})
    console.log(contact);
  }





  return (

    <form onSubmit={submitform} action="">

      <div class="register-form">
        <div >
          <label for="exampleFormControlInput1" class="form-label">Usename</label>
          <input type="text" name='username' required={true} value={contact.username} onChange={handleinput}  id="username" class="form-control" placeholder="tanishq" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input type="email" name='email' required={true}  id="email" value={contact.email} onChange={handleinput} class="form-control" placeholder="name@example.com" />
        </div>
        <div style={{display:"flex",flexDirection:"column"}} class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea name="message" id="message" value={contact.message} onChange={handleinput} required={true} cols="5" rows="10"></textarea>
        </div>
        

        <button className='btn'>Submit</button>
      </div>

    </form>
  )
}
