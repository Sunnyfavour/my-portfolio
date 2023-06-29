import React from 'react'
import "./main.css"
import favour1 from "../../assets/favour1.jpg"

const Main = () => {
  return (
    <div className='mainsection' id='About' >
        <div className='image'>
            <img src={favour1} alt='mypicture' id='img' />
        </div>

        <div className='details'>
            <div className='heading__1' ><h1  id='h1'>Hi, I'm Sunday Favour Edidiong</h1></div>
            <p>Sunday Favour Edidiong is a software developer based in Nigeria, who is passionate in solving problems using softwares, developing and maintaining various softwares. I'm currently an undergraduate of Mechanical Engineering. I'm proficient in HTML, CSS, javaScript, React js and other software development applications. In addition to my coursework, I've also contributed to various open source projects which has given me the opportunity to work and learn from various expertise. I'm seeking to utilize my broad educational background and programming skills to thrive as a software engineer. </p>
        </div>
    </div>
  )
}

export default Main