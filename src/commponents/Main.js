import React from 'react'
import { NavLink } from 'react-router-dom'

function Main() {
  return (
    <header className="App-header">
    <img src="#" alt="" />
    <p>
      <code>Welcome to </code>
    </p>
    <h2>Class Sync</h2>
    <p>
      <code>Sync your schedule, ace your classes</code>
    </p>
    <div className="btn-group">
      <NavLink to="/signup"> {/* Link the button to the "/signup" route */}
        <button className='login_btn'>SignUp</button>
      </NavLink>
      <NavLink to="/login"> {/* Link the "LogIn" button to the "/login" route (if needed) */}
        <button className='login_btn'>LogIn</button>
      </NavLink>
    </div>
  </header>
  )
}

export default Main