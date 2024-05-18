import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/images/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos debitis sapiente quae iste voluptatum quibusdam eligendi! Assumenda explicabo temporibus veritatis similique magnam accusamus, nemo iure fuga rerum quo odio numquam!</p>
         <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
