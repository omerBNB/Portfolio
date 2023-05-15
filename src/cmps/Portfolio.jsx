import React from 'react'
import AirgptImg from '../imgs/airgpt.png'
import Bitcoin from '../imgs/bitcoin.png'

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
          <h3>AirGpt</h3>
          <h5>Airbnb replicate: Framework - Vue , Backend - Node.js, Database - MongoDB</h5>
          <div className="portfolio-item-cta">
            <a href="https://github.com/omerBNB/AirGPT" className="btn" target="_blank">
              Github
            </a>
            <a href="https://airgpt.onrender.com#/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={Bitcoin} alt="" />
          </div>
          <h3>Bitcoin</h3>
          <h5>Bitcoin app: built with React using Redux and React Hooks</h5>
          <div className="portfolio-item-cta">
            <a href="https://github.com/omerBNB/bitcoin-hooks" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://omerbnb.github.io/bitcoin-hooks/#/"
              className="btn btn-primary"
              target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={AirgptImg} alt="" />
          </div>
          <h3>This is portfolio a item title</h3>
          <h5>test</h5>
          <div className="portfolio-item-cta">
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
