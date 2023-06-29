import React from 'react'
import "./Project.css"
import ecommerce from "../../assets/ecommerce.jpg"
import climate from "../../assets/climate.jpg"
import weather from "../../assets/weather.jpg"
import engineering from "../../assets/engineering.jpg"
import dictionary from "../../assets/dictionary.jpg"

const Project = () => {
  return (
    <div className='project__section' id='project'>
        <div className='project__heading'>
            <h1>My Projects</h1>
        </div>
        <div className='project__section1'>
            <div className="img__tag">
                <img src={ecommerce} alt="A clone E commerce site" />
                <p>A clone e-commerce site</p>
                </div>

            <div className="img__tag">
                <img src={engineering} alt="An engineering landing page" />
                <p>An construction landing page</p>
                </div>

            <div className="img__tag">
                <img src={dictionary} alt="A dictionary App" />
                <p>A dictionary App</p>
                </div>
        </div>

        <div className='project__section2'>
            <div className='img__tag1'>
                <img src={weather} alt="A weather App" />
                <p>A collabrative site project</p>
                </div>

            <div className='img__tag1'>
                <img src={climate} alt="A climate App" />
                <p>A climate App</p>
                </div>
        </div>
    </div>
  )
}

export default Project