import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../card/Card'
import ResumeEn from './Resume-EN.pdf'

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          <br />
          Exercitationem, neque non earum consequatur deleniti praesentium explicabo voluptatem modi atque cupiditate veniam autem quibusdam commodi inventore natus ab placeat iste sed.
        </span>
        <a href={ResumeEn} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94"}} ></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{left: '14rem'}} >
        <Card
        emoji= {HeartEmoji}
        heading= {'Frontend'}
        detail= {'HTML, CSS, JavaScript, React'}
        />
        </div>
        {/* second card */}
        <div style={{ top: '12rem', left: '-4rem'}} >
          <Card
          emoji={Glasses}
          heading= {'Backend'}
          detail= {'MongoDB, Express.js, Node.js, Python'}
          />
        </div>
        {/* third card */}
        <div style={{ top: '19rem', left: '12rem'}}>
          <Card
          emoji={Humble}
          heading= {'Soft Skills'}
          detail= {'Good communication, Problem resolution, Attention to detail'}
          />

        </div>
      </div>
    </div>
  )
}

export default Services