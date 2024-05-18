import React from 'react'
import "./About.css";
import about_img from "../../assets/images/about.png"
import play_icon from "../../assets/images/play-icon.png"
const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>About Udemy</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ei.
        Saepe ipsa quaerat quae. Autem cum illum eligendi excepturi odit dolorem qui magnam. Vel modi sint, error ipsa totam quia quam, assumenda, suscipit veniam voluptates in accusantium ad sequi sit!</p>
      <p>Lormmodi tempora, asperiores eveniet eaque.ipsum, dolor sit amet consectetur adipisiu</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisiuptate iusto, eos repudiandae ipsam nihil. Voluptate nemo ipsum iure, id repellendus mollitia molestiae, dolor quibusdam esse tenetur quos numquam!</p>
      </div>
    </div>
  )
}

export default About
