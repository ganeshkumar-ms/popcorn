
//newOTTs

import React, { useState } from 'react';
import { BsBookmarkHeartFill } from "react-icons/bs";
import NewOTTsvg from '../svg/newOTTsvg';
import { Footer } from '../Footer/Footer';
import './Section2.css';

const Section2 = () => {
  
  const movies = [
    {
      moviename: "Vazhai",
      language: "Tamil",
      link: "https://www.youtube.com/embed/-NEVvOEPubA?si=h1nNg2t07rdvx44X",
      ottplatform: "https://www.hotstar.com/",
      platformName: "Disney+ Hotstar"
    },
    {
      moviename: "Teacup",
      language: "English",
      link: "https://www.youtube.com/embed/TlgFApr-VLA?si=JsUUEzmknCGPfh8p",
      ottplatform: "https://www.jiocinema.com/",
      platformName: "Jio Series"
    },
    {
      moviename: "Amaran",
      language: "Tamil",
      link: "https://www.youtube.com/embed/hylIXfZeB4c?si=Cu9eIzQlRExboWat",
      ottplatform: "https://www.jiocinema.com/",
      platformName: "Amazon Prime"
    }
  ];

  const [bookmarks, setBookmarks] = useState(Array(movies.length).fill(false)); 
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 3;

  const handleBookmarkClick = (index) => {
    const newBookmarks = [...bookmarks];
    newBookmarks[index] = !newBookmarks[index];
    setBookmarks(newBookmarks);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const nextPage = () => {
    if (currentPage < Math.ceil(movies.length / moviesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
     <div>
      <div className='container-fluid m-2 mb-4'>
        <div className='text-center mt-4 ott'>
          <NewOTTsvg />
          <hr style={{ color: "beige" }} />
          <div className='text-light mt-3 rounded-4  w-100'>
            {currentMovies.map((movie, index) => {
              const { moviename, language, link, ottplatform, platformName } = movie;
              return (
                <div key={index}>
                  <div className='card position-relative border-0 ott-card d-grid m-3'style={{ background: "linear-gradient(to bottom, #564b4ae1, #d2d5a2, #E6EFC2)" }}>
                    <div className="row">
                      {/* Embed url */}
                      <iframe className='col-12 col-md-6' width="100%" height="200" src={link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                      <div className='position-relative col-12 col-md-5 mt-3 mb-3 mt-md-5 ms-md-5 ott-content text-center text-md-start'>
                        <h2 className='text-dark'>{moviename} | {language}</h2>
                        <hr />
                        <div>
                          {/* OTT platform button */}
                          <button className='btn rounded-5 btn-dark platform'>
                            <a href={ottplatform} target='_blank' rel="noopener noreferrer">{platformName}</a>
                          </button>
                          {/* Bookmark button */}
                          <button className='btn ms-3 border-0' onClick={() => handleBookmarkClick(index)}>
                            {bookmarks[index] ? (
                              <BsBookmarkHeartFill size={28} color="red" />
                            ) : (
                              <BsBookmarkHeartFill size={28} color="black" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="text-center my-4 pagination-controls">
        <button className="btn btn-dark" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span style={{color:'lightgray'}}>Page {currentPage} of {Math.ceil(movies.length / moviesPerPage)}</span>
        <button className="btn btn-dark" onClick={nextPage} disabled={currentPage === Math.ceil(movies.length / moviesPerPage)}>Next</button>
      </div>

      <Footer />
    </div>
  );
};

export default Section2;