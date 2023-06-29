import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className='contact__main' id='contact'>
        <div className='contact__heading'>
            <h1>lets get in touch!</h1>
        </div>
        <div className='contact__links'>
            <div className='links'>
                <h2>Email</h2>
                <a href="http://edidiongfavour2@gmail.com">Email</a>
            </div>
            <div className='links'>
                <h2>Linkedin</h2>
                <a href="https://www.linkedin.com/in/sunday-edidiong-1a92171a1">Linkedin</a>
            </div>
            <div className='links'>
                <h2>Twitter</h2>
                <a href="https://twitter.com/FavourEdidiong1?t=-64rtgOb1EMvq1Fp1kI1Fw&s=09">Twitter</a>

            </div>
            <div className='links'>
                <h2>Github</h2>
                <a href="https://www.github.com/Sunnyfavour">Github</a>
            </div>
            <div className="links">
                <h2>My resume</h2>
                <a href="https://drive.google.com/file/d/1-BqqMEharyFUg8Q8Q6eAwARLO7ZDobxP/view?usp=drivesdk">My resume</a>
            </div>
        </div>
    </div>
  )
}

export default Contact