import React from 'react'
import { Footer } from '../Footer/Footer'
import './About.css'
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import Aboutsvg from '../svg/aboutsvg';


const About = () => {
  return (
    <div>
      
      <div className='text-center mt-3'>
        <Aboutsvg/>
          <hr style={{color:"beige"}}/>
          </div>

          <div className="card rounded-4 m-3 border-0 abt" style={{height:"650px"}}>
            <h4 className='text-start mt-4 position-absolute'>
              Welcome to Popcorn, movie review and discovery site with a watchlist feature. With a 
             vision to revolutionize Information technology, this project stands as a testament to the power of individual creativity and dedication. As a one-person powerhouse, Ganeshkumar brings a unique blend of expertise, innovation, and passion to every endeavor.
              <br />
              <br />

Popcorn is committed to delivering exceptional results that exceed expectations. Whether you’re looking to hire or need freelance work, you can rely on Ganeshkumar’s unwavering dedication and unparalleled skill.
<br /><br />

Get in Touch For hiring inquiries or freelance opportunities, please contact:
<br /><br />
<div className='d-flex gap-4'>
<Link to="https://www.linkedin.com/in/ganeshkumar-ms" target='_blank'><FaLinkedinIn size={"30px"}/></Link>
<Link to="https://wa.me/9940999860" target='_blank'><IoLogoWhatsapp size={"30px"}/></Link>
<Link to="mailto:ganesh71730@gmail.com" target='_blank'><IoIosMail size={"30px"}/></Link>



</div>

<br />

Join us in this journey of innovation and <br />
excellence, and let's create something 
<br />extraordinary together.</h4>

          </div>
          <Footer/>
    </div>
  )
}

export default About