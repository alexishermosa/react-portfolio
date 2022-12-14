import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import { FloatingDiv } from '../floatingdiv/FloatingDiv'

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
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div className='i-crown'>
          <FloatingDiv image={Crown} text1='Web' text2='Developer'/>
        </div>
        <div className='i-design'>
          <FloatingDiv image={thumbup} text1='Best Quality' text2='Work'/>
        </div>
        {/*blur divs*/}
        <div className="blur" style={{
          background: "rgb(238 210 255)",
          left: '20rem',
          }} ></div>
        <div className="blur" style={{
          background: '#C1F5FF',
          top: '15rem',
          left: '-12rem',
          width: '21rem',
          height: '11rem'

        }} ></div>
      </div>
    </div>
  )
}

export default Intro