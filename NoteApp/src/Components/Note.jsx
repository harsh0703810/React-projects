import React from 'react'
import { MdDeleteForever } from "react-icons/md";
function Note() {
  return (
    <div className="note">
        <span>
            Hello this is our first note

        </span>
        <div className="notefooter">
            <small>13/04/2024</small>
            <MdDeleteForever></MdDeleteForever>
            
        </div>
      
    </div>
  )
}

export default Note
