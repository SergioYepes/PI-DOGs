import React from 'react'
import {Link} from "react-router-dom";
import "./landing.css"

function Landing() {
  return (
    <div className="divLanding">
        <Link to="/home">
            <button className="buton"><h1><span>home</span></h1></button>
        </Link>
        <h1 className="h1">Welcome to Dog Adventure</h1>
    </div>
  )
}

export default Landing