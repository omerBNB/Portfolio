import React from 'react'
import { BsLinkedin, BsFacebook } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

export function Social() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/omer-ben-natan-bb399814a/" target="_blank">
        <BsLinkedin/>
      </a>
      <a href="https://github.com/omerBNB" target="_blank"><FaGithub/></a>
      <a href="https://www.facebook.com/omer.b.natan/" target="_blank"><BsFacebook/></a>
    </div>
  )
}
