import React from 'react'
import { NavLink } from 'react-router-dom'

const getactive=(isActive)=>{
  if(isActive){
    return {
    color:"orange"
    }
  }
  else{
    return{
      color:"blue"
     }  
  }
}
const Navbar4 = () => {
  return (
    <div className='navbtn'>
   <ul>
       <li> <NavLink to='/home' style={()=>{return{color:"white",textDecoration:"none"}}}>HOME</NavLink></li>
       <li> <NavLink to='/student' style={()=>{return {color:"white",textDecoration:"none"}}}>STUDENT</NavLink></li>
       <li> <NavLink to='/contect' style={()=>{return {color:"white",textDecoration:"none"}}} >CONTECT</NavLink></li>
       
   </ul>
    </div>
  )
}

export default Navbar4