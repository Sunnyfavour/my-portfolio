import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"

const Footer = () => {
  return (
    <div  className='footer'>
      <div>
        <h1>Sunday Favour Edidiong</h1>
      </div>
      <div  className='font'>
      <div className='font__icon'>
      <a href="https://github.com/Sunnyfavour"><FontAwesomeIcon icon={faGithub}/>  </a>
      </div>
      <div className='font__icon'>
        <a href="https://twitter.com/FavourEdidiong1?t=-64rtgOb1EMvq1Fp1kI1Fw&s=09"> <FontAwesomeIcon icon={faTwitter}/></a>
        </div>
      <div className='font__icon'>
         <a href="https://www.linkedin.com/in/sunday-edidiong-1a92171a1"><FontAwesomeIcon icon={faLinkedin}/></a>
        </div>
      </div>
    </div>
  );
}

export default Footer