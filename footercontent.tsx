import React from 'react';
import './footercontent.css'; // Assuming you will create this CSS file for styling
import enrollmentLogo from "./images/enrollment-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';


const Footercontent: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={enrollmentLogo} alt="Finray Solar Logo" className="footer-logo-img" />
          <p className="footer-description">
            Our partners build Community Solar Projects — so you don’t have to install anything on your roof or sign any 20 year leases.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="mailto:admin@finraysolar.com">admin@finraysolar.com</a></li>
            <li><a href="tel:+1234567890">12-345-67890</a></li>
            <li><a href="https://www.finray.solar" target="_blank" rel="noopener noreferrer">www.finray.solar</a></li>
            <li>29 Bala Ave, Bala Cynwyd, Philadelphia, PA 19004, United States</li>
          </ul>
        </div>

        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footercontent;
