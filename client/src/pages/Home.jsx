import React from 'react'
import imgs from "../assets/kl.jpg"

import "../App.css"
export default function Home() {
  return (
    <>
    <div className='hero'>

      <div className='conts'>
        <h1> welcome to our website </h1>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores autem nesciunt velit molestias dolores voluptates fugiat aut labore culpa libero reprehenderit quia modi ut voluptate assumenda, rerum eos repellat exercitationem quaerat minima nobis sapiente maxime dicta aperiam! Architecto numquam inventore, magnam unde eligendi temporibus facere?</p>

      </div>

      <div>
        <img src={imgs} alt="" srcset="" />
      </div>

    </div>
      
      </>
  )
}
