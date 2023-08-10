import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Main.css";

function Main() {
  return (
    <header className="App-header">
      <img src="#" alt="" />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZue5Qh16KI0YygLmKvL6cTLdL4BGwkUeeAg&usqp=CAU"
        alt="logo"
        width="150"
      />
      <p className="welcome"> Welcome to Class Sync </p>
      <p className="sync">Sync your schedule, ace your classes</p>
      <div className="btn-group">
        <NavLink to="/signup">
          {" "}
          {/* Link the button to the "/signup" route */}
          <button className="login_btn">SignUp</button>
        </NavLink>
        <NavLink to="/login">
          {" "}
          {/* Link the "LogIn" button to the "/login" route (if needed) */}
          <button className="login_btn">LogIn</button>
        </NavLink>
      </div>
    </header>
  );
}

export default Main;
