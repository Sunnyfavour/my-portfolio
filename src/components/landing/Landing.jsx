import React from 'react'
import "./Landing.css"
import dev from "../../assets/devtown.jpg"
import reactBasics from "../../assets/react basics certificate.jpg"
import advancedReact from "../../assets/advanced react .jpg"
import javaScript from "../../assets/js certificate.jpg"
import frontend from "../../assets/frontend.jpg"
import version from "../../assets/my version control cert.jpg"

const Landing = () => {
  return (
    <div className='certificates__section'>

            <div className='text'>
                <h2>My Certificates</h2>
            </div>
        <div className='certificate__img'>
            
            <div className='section1'>
                <div className='img__4'>
                <img src={frontend} className='image__fluid' alt="my frontend certificate"/>
                    <p>Coursera front-end Development Certificate</p>
                </div>

                <div className='img__4'>
                <img src={reactBasics} className='image__fluid' alt="my react basics certificate" />
                    <p>Coursera React Basics Certificate</p>
                </div>

                <div className='img__4'>
                <img src={advancedReact} className='image__fluid' alt="my advanced react certificate" />
                        <p>Coursera Advanced React Certificate</p>
                </div>

            </div>

            <div className='section2'>
                    <div className='img__6'>
                        <img src={javaScript} className='image__fluid1' alt="my javascript certificate" />
                        <p>Coursera javaScript Certificate</p>
                    </div >

                    <div className="img__6">
                        <img src={version} className='image__fluid1' alt="my version control certificate" />
                        <p>Coursera version control Certificate</p>
                    </div>
                        
                    <div className='img__6'>
                    <img src={dev} className='image__fluid1' alt="my devOp certificate" />
                        <p>devtown Certificate of appreciation</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Landing