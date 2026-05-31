
//footer

import React from 'react'
import './Footer.css'
import { FaGithub, FaInstagram, FaBehance, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const links = {
  linkedin: "https://www.linkedin.com/in/ganeshkumar-ms",
  behance: "https://www.behance.net/ganeshm18",
  github: "https://github.com/ganeshkumar-ms",
  instagram: "https://www.instagram.com/ganezx._/",
  portfolio: "https://ganeshkumar-portfolio.netlify.app/"
}

export const Footer = () => {
  return (
    <>

      <footer class="footer border-4 border-top border-warning bg-dark text-white text-center position-relative bottom-0 w-100">

        <div class="container-fluid p-3 mt-1" >
          <div class="socials d-flex gap-5">
            <Link to={links.linkedin} target='_blank'> <FaLinkedin size="1.8rem" color='white' /></Link>
            <Link to={links.github} target='_blank'>  <FaGithub size="1.8rem" color='white' /></Link>
            <Link to={links.behance} target='_blank'>  <FaBehance size="1.8rem" color='white' /></Link>
            <Link to={links.instagram} target='_blank'>  <FaInstagram size="1.8rem" color='white' /></Link>
          </div>
        </div>


        <section>
          <form action="">
            <div class="row d-flex justify-content-center mx-2">
              <div class="col-12">
                <p>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div class="col-md-5 col-8 text-center">
                <div data-mdb-input-init class="form-outline mb-3">
                  <input type="email" placeholder='Email address' class="form-control" />
                </div>
              </div>
              <div class="col-auto">
                <button data-mdb-ripple-init type="submit" class="btn btn-warning mb-3">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section>
          <p>
            For more information, subscribe to our newsletter and never miss a review!
          </p>

          <div class="text-center pb-3" >
            © 2024 Copyright:
            <a class="text-reset fw-bold" href={links.portfolio} target='_blank' rel="noopener noreferrer">Ganeshkumar M</a>
          </div>    
           </section>
      </footer>
    </>
  )
}
