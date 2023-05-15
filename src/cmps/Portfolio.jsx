import React from 'react'
import AirgptImg from '../imgs/airgpt.png'

export function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={AirgptImg} alt="" />
          </div>
          <h3>This is portfolio a item title</h3>
          <div className='portfolio-item-cta'>
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={AirgptImg} alt="" />
          </div>
          <h3>This is portfolio a item title</h3>
          <div className='portfolio-item-cta'>
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={AirgptImg} alt="" />
          </div>
          <h3>This is portfolio a item title</h3>
          <div className='portfolio-item-cta'>
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
