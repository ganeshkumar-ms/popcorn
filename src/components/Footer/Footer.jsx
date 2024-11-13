import React from 'react'
import './Footer.css'
import { FaGithub , FaInstagram , FaBehance,FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-router-dom'


export const Footer = () => {
  return (
    <>   

<footer class="footer border-5 border-top border-warning bg-dark text-white text-center position-relative bottom-0 w-100">

  <div class="container-fluid p-4 " >
    <section class="m-2">
    <div class="socials d-flex gap-5">
        <Link  to="https://www.linkedin.com/in/ganeshkumar-m-128a19259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank'> <FaLinkedin size="2rem" color='white'/></Link>
        <Link  to="https://github.com/ganeshkumar-ms" target='_blank'>  <FaGithub  size="2rem" color='white'/></Link>
        <Link  to="https://www.behance.net/ganeshm18" target='_blank'>  <FaBehance  size="2rem" color='white'/></Link>
        <Link  to="https://www.instagram.com/ganezx._/" target='_blank'>  <FaInstagram size="2rem" color='white'/></Link>
</div>
    </section>
    </div>


    <section class="">
      <form action="">
        <div class="row d-flex justify-content-center mx-2">
          <div class="col-12">
            <p>
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          <div class="col-md-5 col-8 text-center">
            <div data-mdb-input-init class="form-outline mb-4">
              <input type="email" placeholder='Email address' class="form-control" />
            </div>
          </div>
          <div class="col-auto">
            <button data-mdb-ripple-init type="submit" class="btn btn-warning mb-4">
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
 
    <section className='mx-3'>
      <p>
      For more information, subscribe to our newsletter and never miss a review! 
      </p>
    </section>
  
    
  <div class="text-center pb-4 mt-2" >
    © 2024 Copyright:
    <a class="text-reset fw-bold" href="https://ganeshkumar-portfolio.netlify.app/" target='_blank' rel="noopener noreferrer">Ganeshkumar M</a> 
  </div>
 
</footer>

    
   </>
  )
}
