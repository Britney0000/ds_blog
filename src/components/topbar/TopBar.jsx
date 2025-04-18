import React from 'react'
import './topbar.css'
import dsImage from "../../assets/ds.jpeg";



export default function TopBar() {
  return (
    <div className='top'>
      <div className= "topLeft">
        <i className="topIcon fa-brands fa-github"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
      </div>

      <div className= "topCenter">
      <ul className='topList'>
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
        </ul>
      </div>

      <div className= "topRight">
        <img className="topImage" src={dsImage} alt="Demon Slayer"/>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
