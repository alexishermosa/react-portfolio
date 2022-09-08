import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Alexis Hermosa</span>
          <span>Fullstack & Mobile Developer with experience in web designing and development, producing quality work.</span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/alexishermosa" rel="noopener noreferrer" target="_blank">
            <img src={Github} alt="github-icon" /></a>
          <a href="https://www.linkedin.com/in/alexishermosa/" rel="noopener noreferrer" target="_blank">
            <img src={Linkedin} alt="linkedin-icon" /></a>
          <a href="https://www.instagram.com/aleexis_her/" rel="noopener noreferrer" target="_blank">
            <img src={Instagram} alt="instagram-icon" /></a>
        </div>
      </div>

      <div className="i-right">
        Right side
      </div>
    </div>
  )
}

export default Intro