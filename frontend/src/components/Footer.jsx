import React from "react";
import LogoText from './LogoText';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footerRow">
      <LogoText />
      <div className="footerColumn">
        <h3>About</h3>
        <ul>
          <li>About Us</li>
          <li>How it Works</li>
          <li>Sustainability Mission</li>
        </ul>
      </div>
      <div className="footerColumn">
        <h3>Support</h3>
        <ul>
          <li>Help Center</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footerColumn">
        <h3>Legal</h3>
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Refund and Cancellation</li>
        </ul>
      </div>
      <div className="footerColumn">
        <h3>Community</h3>
        <ul>
          <li>Blog</li>
          <li>Success Stories</li>
        </ul>
      </div>
      <div className="footerColumn">
        <h3>Stay Connected</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
