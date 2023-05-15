import React from 'react'
import { CallToAction } from '../cmps/CallToAction'
import IMG from '../imgs/me.jpg'
import { Social } from '../cmps/Social'


export function Header() {
  return (
    <div className="container header-container">
      <h5>Hello i'm</h5>
      <h1>Omer Ben Natan</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CallToAction />
      <Social/>
      <div className="my-info">
        <img src={IMG} alt="" />
      </div>
      <a href="#contact" className="scroll-down">
        Contact Me
      </a>
    </div>
  )
}
