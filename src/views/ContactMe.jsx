import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { BsTelephoneOutboundFill } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
export function ContactMe() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <article className="contact-option">
          <MdOutlineEmail/>
          <h4>Email</h4>
          <h5>omerbnb@gmail.com</h5>
          <a href="mailto:omerbnb@gmail.com" target="_blank">
            Email Me
          </a>
        </article>
        <article className="contact-option">
          <BsTelephoneOutboundFill />
          <h4>Call</h4>
          <h5>+972-54-24-333-15</h5>
          <a href="tel:+972542433315" target="_blank">
            Call Me
          </a>
        </article>
        <article className="contact-option">
          <BsWhatsapp />
          <h4>WhatsApp</h4>
          <h5>+972-54-24-333-15</h5>
          <a href="https://wa.me/972542433315" target="_blank">
            Message Me
          </a>
        </article>
      </div>
    </section>
  )
}
