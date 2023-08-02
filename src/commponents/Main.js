import React from 'react'
import { NavLink } from 'react-router-dom'  
import '../css/Main.css'

function Main() {
  return (
    <header className="App-header">
    <img src="#" alt="" />
      <p>Welcome to Class Sync</p>
      <h2>Class Sync</h2>
      <p>Sync your schedule, ace your classes</p>
  
    <div className="btn-group">
      <NavLink to="/signup"> {/* Link the button to the "/signup" route */}
        <button>SignUp</button>
      </NavLink>
      <NavLink to="/login"> {/* Link the "LogIn" button to the "/login" route (if needed) */}
        <button>LogIn</button>
      </NavLink>
    </div>
  </header>
  )
}

export default Main