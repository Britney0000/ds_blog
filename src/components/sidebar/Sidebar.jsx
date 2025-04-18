import React from 'react'
import "./sidebar.css"
import officeImage from "../../assets/office.jpeg";

function Sidebar() {
  return (
    <div className='sidebar' >
      <div className='sidebarItem'>
          <span className="sidebarTitle">ABOUT ME</span>
          <img src={officeImage} alt="office image"></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quam iusto magnam. Voluptate doloremque sequi, earum modi in laboriosam quam dolores esse, animi illum enim, adipisci commodi facere maxime nemo!</p>
      </div>

      <div className='sidebarItem'>
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-github"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
        </div>
      </div>

    </div>
  )
}

export default Sidebar