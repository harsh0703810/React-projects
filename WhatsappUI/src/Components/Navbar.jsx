import React from 'react'
import profile from '../assets/profile.jpg'
import { BiMessage } from "react-icons/bi";

function Navbar() {
  return (
    <div className ="w-20 h-20 flex">
        
      <img src={profile} alt="" className="rounded-full object-cover"/>
    </div>
  )
}

export default Navbar
