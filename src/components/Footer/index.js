import React from 'react';
import { FaGithub, FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/acp25" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/alex-philibert-2032611b7/" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
          <a href="https://www.facebook.com/" target="blank">
            <li>
              <FaFacebookF />
            </li>
          </a>
          <a href="https://www.instagram.com" target="blank">
            <li>
              <FaInstagram />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
