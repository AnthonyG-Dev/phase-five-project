import React from 'react';
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* First Column */}
          <div className="col">
            <h4>Students</h4>
            <ul>
              <li>Imperial students</li>
              <li>Student Hub</li>  
              <li>Careers Service </li> 
              <li>Imperial Mobile</li>  
              <li>Graduation</li>
              {/* Add more items if needed */}
            </ul>
          </div>

          {/* Second Column */}
          <div className="col">
            <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li></li>
              {/* Add more items if needed */}
            </ul>
          </div>   

          {/* Third Column*/}
          <div className="col">
            <h4>Contact us</h4>  
            <ul>
              <li>0777754698</li>  
              <h4>Gmail</h4>
              <a>classsync@gmail.com</a>
              {/* Add more items if needed */}
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="col">
          <h4>Social</h4>
            {/* Add social media icons */}  
            <div className="social-icons">  
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
