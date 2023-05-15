import React from 'react'
import CV from '../files/cv.pdf'
export function CallToAction() {
  return (
    <div className="call-to-action">
      <a className="btn" href={CV}>
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  )
}
