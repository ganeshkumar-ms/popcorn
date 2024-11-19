
//New OTT RELEASES

import React from 'react'
import { Footer } from '../Footer/Footer'
import './Section2.css'
import { BsBookmarkHeartFill } from "react-icons/bs";
import { useState } from 'react';
import NewOTTsvg from '../svg/newOTTsvg';

const Section2 = () => {
  const [bookmarks, setBookmarks] = useState([false, false, false, false]);

  const handleBookmarkClick = (index) => {
    const newBookmarks = [...bookmarks];
    newBookmarks[index] = !newBookmarks[index];
    setBookmarks(newBookmarks);
  };


  return (
    <div>
      <div className='conatiner-fluid'>
        <div className='text-center mt-4 ott'>
          <div>
            <NewOTTsvg />
            <hr style={{ color: "beige" }} />
          </div>
          <div className='text-light mt-3 rounded-4 px-md-4 w-100'>
            <div className='card position-relative border-0 ott-card d-grid m-3' style={{ background: "linear-gradient(to bottom, #564b4ae1, #d2d5a2, #E6EFC2)" }}>
              <div className="row">

                <iframe className='col-12 col-md-6' width="100%" height="200" src="https://www.youtube.com/embed/-NEVvOEPubA?si=h1nNg2t07rdvx44X" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <div className='position-relative col-12 col-md-5 mt-3 mb-3 mt-md-5 ms-md-5 ott-content text-center text-md-start'>
                  <h2 className='text-dark'>Vaazhai | Tamil</h2>
                  <hr />
                  <div >
                    <button className='btn rounded-5 btn-dark platform'>
                      <a href="https://www.hotstar.com/" target='_blank' rel="noopener noreferrer">Disney+ Hotstar</a>
                    </button>
                    <button className='btn ms-3 border-0' onClick={() => handleBookmarkClick(1)}>
                      {bookmarks[1] ? (<BsBookmarkHeartFill size={28} color="red" />) : (<BsBookmarkHeartFill size={28} color="black" />)}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className='card position-relative border-0 ott-card d-grid m-3' style={{ background: "linear-gradient(to bottom, #564b4ae1, #d2d5a2, #E6EFC2)" }}>
              <div className="row">

                <iframe className='col-12 col-md-6' width="100%" height="200" src="https://www.youtube.com/embed/TlgFApr-VLA?si=JsUUEzmknCGPfh8p" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <div className='position-relative col-12 col-md-5 mt-3 mb-3 mt-md-5 ms-md-5 ott-content text-center text-md-start'>
                  <h2 className='text-dark'>Teacup | English</h2>
                  <hr />
                  <div>
                    <button className='btn rounded-5 btn-dark platform'><a href="https://www.jiocinema.com/" target='_blank' rel="noopener noreferrer">Jio Series</a></button>
                    <button className='btn ms-3 border-0' onClick={() => handleBookmarkClick(2)}>
                      {bookmarks[2] ? (<BsBookmarkHeartFill size={28} color="red" />) : (<BsBookmarkHeartFill size={28} color="black" />)}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr />


            <div className='card position-relative border-0 ott-card d-grid m-3' style={{ background: "linear-gradient(to bottom, #564b4ae1, #d2d5a2, #E6EFC2)" }}>
              <div className="row">

                <iframe className='col-12 col-md-6' width="100%" height="200" src="https://www.youtube.com/embed/-NEVvOEPubA?si=h1nNg2t07rdvx44X" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <div className='position-relative col-12 col-md-5 mt-3 mb-3 mt-md-5 ms-md-5 ott-content text-center text-md-start'>
                  <h2 className='text-dark'>Vaazhai | Tamil</h2>
                  <hr />
                  <div >
                    <button className='btn rounded-5 btn-dark platform'>
                      <a href="https://www.hotstar.com/" target='_blank' rel="noopener noreferrer">Disney+ Hotstar</a>
                    </button>
                    <button className='btn ms-3 border-0' onClick={() => handleBookmarkClick(3)}>
                      {bookmarks[3] ? (<BsBookmarkHeartFill size={28} color="red" />) : (<BsBookmarkHeartFill size={28} color="black" />)}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr />


            <div className='card position-relative border-0 ott-card d-grid m-3' style={{ background: "linear-gradient(to bottom, #564b4ae1, #d2d5a2, #E6EFC2)" }}>
              <div className="row">
       
                <iframe className='col-12 col-md-6' width="100%" height="200" src="https://www.youtube.com/embed/TlgFApr-VLA?si=JsUUEzmknCGPfh8p" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              
                <div className='position-relative col-12 col-md-5 mt-3 mb-3 mt-md-5 ms-md-5 ott-content text-center text-md-start'>
                  <h2 className='text-dark'>Teacup | English</h2>
                  <hr />
                  <div>
                    <button className='btn rounded-5 btn-dark platform'><a href="https://www.jiocinema.com/" target='_blank' rel="noopener noreferrer">Jio Series</a></button>
                    <button className='btn ms-3 border-0' onClick={() => handleBookmarkClick(4)}>
                      {bookmarks[4] ? (<BsBookmarkHeartFill size={28} color="red" />) : (<BsBookmarkHeartFill size={28} color="black" />)}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <hr />

          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Section2