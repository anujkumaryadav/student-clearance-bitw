import React from 'react'
import logo from "./logo.jpeg";
import "./login.css";
export default function student(props) {
  
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ width: "80%", height: "125px" }}
          />
          <div className="box">
            <h3 className="heading">{props.title3}</h3>
            <input
              type="text"
              className="name"
              id="username"
              placeholder="Username"
            />
            <br></br>
            <input
              type="password"
              className="name"
              id="password"
              placeholder="Password"
            />
            <div className="password">
              <a href="#reset" id="reset">
                Forgot password
              </a>
            </div>
            {/* <button onclick={login} id="btn">
              Login
            </button> */}
            <button id="btn" type="submit">Login</button>
          </div>
        </header>
      </div>
    </>   
  )
}
