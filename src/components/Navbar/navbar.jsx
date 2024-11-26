import React, { useState } from 'react'
import "./navbar.css"
import { Offcanvas } from 'react-bootstrap';
import Navbarsvg from '../svg/navbarsvg';
import { FaSortAmountDown } from 'react-icons/fa';
import { CgMenuLeft } from 'react-icons/cg';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

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
                  isActive ? <FaSortAmountDown size={30} color='black' title='Menu' className='bg-warning border-0' /> : <CgMenuLeft size={35} color='black' title='Menu' className='bg-warning border-0' />
                }
              </button>
            </div>
          </button>
          <div class="collapse navbar-collapse ms-3 navb" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="movieoftheweek">Movie of the week</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="newOTTs">NewOTT's</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="exclusive">Xclusive</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="reviews">Reviews</a>
              </li>
              <li class="nav-item dropdown border-0" >
                <a class="nav-link border-0" href="##" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Others<IoIosArrowDropdownCircle size={25} className='ms-1 mb-1'/>
                </a>
                <ul class="dropdown-menu border-0 bg-warning">
                  <li><a class="dropdown-item bg-warning border-bottom border-warning-subtle" href="/profile"><strong>Profile</strong></a></li>
                  <li><a class="dropdown-item bg-warning" href="/about"><strong>About</strong></a></li>
                </ul>
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
