import React from 'react'
import { BiCheck } from 'react-icons/bi'

export function Services() {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className='services-container'>
        <article className="service">
          <div className="service-head">
            <h3>Frontend Developement</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service-head">
            <h3>Fullstack Developement</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service-head">
            <h3>Backend Developement</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
