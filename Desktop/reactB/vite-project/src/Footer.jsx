import React from 'react';
import { FaYoutube, FaTwitter, FaInstagram} from 'react-icons/fa';
import './App.scss';

const Footer = () => {
  return (
    <footer>
      <div className='sns-icons'>
        <FaYoutube />
        <FaTwitter />
        <FaInstagram />
      </div>
      <p>&copy; 2025 Programing Lab DemoSite</p>
    </footer>
  )
}

export default Footer;