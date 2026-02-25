import React from 'react'
import "./Footer.css"
import facebook from "./icons/facebook (1).png";
import twitter from "./icons/twitter.png";
import google from "./icons/google (2).png";
import youtube from "./icons/social (1).png";
import linkedin from "./icons/linkedin-big-logo (2).png";


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
      <h2>Foolosh Developer</h2>
      <p>Foolish Developer is a blog website where you wil find great tutorial on web design and development.
        Here each tutorial is beautfully described step by step with the required source code.
      </p>
          <div className="icons">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={google} alt="google" />
          <img src={youtube} alt="youtube" />
          <img src={linkedin} alt="linkedin" />

      </div>
    </div>
    </footer>
  );

}

export default Footer
