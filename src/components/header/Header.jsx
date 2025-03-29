import React from 'react'
import './header.css'
import hpImage from "../assets/home_page.jpeg";

function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>The Demon Slayer Diaries</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={hpImage} alt="Home Page Image"></img>

    </div>
  )
}

export default Header