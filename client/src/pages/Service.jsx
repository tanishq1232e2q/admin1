import React from 'react'
import car from "../assets/car.jpg"
import { useEffect } from 'react'
import { useState } from 'react'
export default function Service() {

  const [service, setservice] = useState([])


  const servicedata=async()=>{
    const response= await fetch("http://localhost:8000/api/auth/services/",{
        method:"GET",
        headers:{

          "Content-Type":"application/json"
        },
        // body:JSON.stringify(service)

      })
      const data=await response.json()
      console.log(data);
      setservice(data)
      
  }

  useEffect(() => {
    servicedata()
  
    
  }, []);
  


  return (
    <div>
      <>
      <h1>welcome to our services</h1>

      <div  className='section'>
        <div className='card'style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridGap:"2rem"}}>
          {
            service.map((elem)=>{

              return(
             <>
             <div>
              <img style={{width:"70%"}} src={car} alt="" srcset="" />
              <div>service: {elem.service}</div>
              <div>description:{elem.description} </div>
              <div>price:{elem.price} </div>
              <div>provider: {elem.provider} </div>

             </div>
              </>

              )
            })
          }

        </div>



      </div>
      
      </>
    </div>
  )
}
