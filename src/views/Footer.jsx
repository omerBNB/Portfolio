import React from 'react'
import { BsLinkedin, BsFacebook } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
export function Footer() {
  return (
    <div className='footer'>
      <a href="#" className='footer-logo'>OmerBN</a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/omer-ben-natan-bb399814a/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/omerBNB" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/omer.b.natan/" target="_blank">
          <BsFacebook />
        </a>
      </div>

      <small className="footer-copyrights">&copy; All Rights Reserved 2023.</small>
    </div>
  )
}
