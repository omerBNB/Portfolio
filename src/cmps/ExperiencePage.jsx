import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
export function ExperiencePage() {
  return (
    <section id="experience">
      <h5>The Skills i Bring</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill classname="experience-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill classname="experience-details-icon" />
              <div>
                <h4>CSS/SCSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill classname="experience-details-icon" />
              <div>
                <h4>JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill classname="experience-details-icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill classname="experience-details-icon" />
              <div>
                <h4>MVC</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill classname="experience-details-icon" />
              <div>
                <h4>React/Vue</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsFillPatchCheckFill classname="experience-details-icon" />
              <div>
                <h4>Node.JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill classname="experience-details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill classname="experience-details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillPatchCheckFill classname="experience-details-icon" />
              <div>
                <h4>Rest APIs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
