import React, { useState } from 'react'
import "./navbar.css"
import { Offcanvas } from 'react-bootstrap';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Navbarsvg from '../svg/navbarsvg';

export default function Navbar() {

  const [isActive, setIsActive] = useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleIconClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-warning mt-3 w-100">
        <div class="container-fluid">
          <Navbarsvg />
          <button class="navbar-toggler rounded-5 border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div>
              <button onClick={handleIconClick}>
                {
                  isActive ? <AiFillCaretUp size={35} color='black' title='Menu' className='bg-warning border-0' /> : <AiFillCaretDown size={35} color='black' title='Menu' className='bg-warning border-0' />
                }
              </button>
            </div>
          </button>
          <div class="collapse navbar-collapse ms-3 navb" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="movieoftheweek">Movie of the Week</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="newOTTs">New OTT Releases</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="reviews">Reviews</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about">About Us</a>
              </li>
            </ul>
          </div>
          <div>
            <button class="rounded-5 border-0 bg-warning " onClick={handleShow} >
              <img class="wishlist mx-md-3 ms-3 mx-0 my-md-1 my-2" src="./Popcorn.png"
                alt="" height={55} title='Wishlist!' />

            </button>

            <Offcanvas show={show} backdropClassName='bg-secondary' onHide={handleClose} placement='end'>
              <Offcanvas.Header className='bg-warning' closeButton>
                <Offcanvas.Title>Wishlist</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='bg-warning-subtle'>
                <p>Here you can add films that you wanna watch later!</p>
                <hr />
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </nav>
    </div>
  )
}
