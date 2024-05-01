import React from 'react'

export default function Footer() {
    let mystyle={
        backgroundColor:"black",
        color:"white",
        position:"absolute",
        bottom:"0",
        width:"100vw"
    }
  return (
    <div style={mystyle} className='footer'>
      <div>www,website.com @2024</div>
    </div>
  )
}
