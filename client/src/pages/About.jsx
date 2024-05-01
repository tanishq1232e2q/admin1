import React from 'react'
import gg from "../assets/gg.jpg"
import { useauth } from '../context/authcontext'

export default function About() {

  const {user}=useauth();
  return (
    <div className='about'>
      <div className='ab'>
        <h1>{user.username}</h1>
        <h1>why choose us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, doloribus, voluptatem incidunt reiciendis velit, eveniet corporis ab similique laboriosam accusantium inventore repellat impedit praesentium nostrum iusto! Hic beatae facilis repellat at a placeat iure vero magnam excepturi. Facere quis eligendi quidem aliquid, molestias magnam nostrum voluptates? Dignissimos ut aliquid ad dolores rerum odit magni perferendis, veniam earum dolorem vero?</p>

      </div>

      <div>
        <img src={gg} alt="" />
      </div>
    </div>
  )
}
