import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <div className='error'>
      <div className='err'>
        <h1>404 Error</h1>
        <h3>Page not found type correct keywords </h3>
        <button className='btn'>
          <Link to="/">back to home</Link>  </button>
      </div>
    </div>
  )
}
