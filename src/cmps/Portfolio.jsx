import React from 'react'
import AirgptImg from '../imgs/airgpt.png'
import Bitcoin from '../imgs/bitcoin.png'
import Vanila from '../imgs/vanila.png'

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
          <h5>Airbnb replicate: Framework - Vue, Node.js, MongoDB</h5>
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
            <img src={Vanila} alt="" />
          </div>
          <h3>Meme Genarator</h3>
          <h5>Full Vanilla Js Project with full Using the MVC Method</h5>
          <div className="portfolio-item-cta">
            <a href="https://github.com/omerBNB/meme-gen" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://omerbnb.github.io/meme-gen/"
              className="btn btn-primary"
              target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
