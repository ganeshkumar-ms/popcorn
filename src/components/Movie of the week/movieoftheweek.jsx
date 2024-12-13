//movieoftheweek

import React, { useState } from 'react';
import './movieoftheweek.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaRegCopy, FaStar } from 'react-icons/fa';
import { Footer } from '../Footer/Footer';
import { FaShareAlt } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FaXTwitter } from 'react-icons/fa6';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ImWhatsapp } from 'react-icons/im';
import Movieoftheweeksvg from '../svg/movieoftheweeksvg';


const URLformat = (name) => name.split(' ').join('_');

export default function Movieoftheweek() {
  const wiki = "https://en.wikipedia.org/wiki/";
  const shareUrl = "https://popcorn-cine.netlify.app/movieoftheweek";

  const movieData = [
    {
      year: 2024,                
      genre: "Action Thriller",  
      type: "R",          
      duration: "2hr 18m",
      movieName: "Joker: Folie à Deux",
      language: "English",
      poster: "https://img5.bdbphotos.com/images/orig/p/p/pp1iry1jdncacn1.jpg?skj2io4l",
      plot: "Struggling with his dual identity, failed comedian Arthur Fleck meets the love of his life, Harley Quinn, while incarcerated at Arkham State Hospital.",
      director: "Todd Phillips",
      writers: ["Todd Phillips", "Scott Silver", "Bob Kane"],
      stars: ["Joaquin Phoenix", "Lady Gaga"],
      trailerLink: "https://youtu.be/_OKAwz2MsJs?si=KknWW__--rNE143x",
      ottPlatform: "https://www.hotstar.com/",
      ottDate: "14 Nov 2024",
      rating: "6.5"
    }
  ];

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleBookmarkClick = () => setIsBookmarked(!isBookmarked);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <div className="mweek container-fluid h-100 w-100">
        <div className="text-center mt-4">
          <Movieoftheweeksvg />
          <hr style={{ color: "beige" }} />
        </div>

        {movieData.map((movie, index) => (
          <div key={index} className="card card-1 p-4 m-2 mb-4 rounded-3 border-0">
            <h1><b>{movie.movieName}</b></h1>
            <div className="row">
              <img className="poster col-md-4 col-12 h-lg-100 h-100" src={movie.poster} alt="Movie Poster" />
              <div className="ms-md-4 info position-relative col-md-6 col-12">
                <p style={{ fontSize: "19px" }} className="mt-3 mt-md-0">{movie.year} • {movie.genre} • {movie.type} • {movie.duration} </p>
                <hr />
                <h3>Plot: {movie.plot}</h3>
                <hr />
                <div className="links">
                 
                  <h5>Director: <a href={`${wiki}${URLformat(movie.director)}`} target="_blank" rel="noopener noreferrer">{movie.director}</a></h5>
                  <hr />
                  
                  <h5>Writers:
                    {movie.writers.map((writer, index) => (
                      <span key={index}>
                        <Link to={`${wiki}${URLformat(writer)}`} target="_blank" rel="noopener noreferrer">{writer}</Link>
                        {index < movie.writers.length - 1 && " • "}
                      </span>
                    ))}
                  </h5>
                  <hr />
                  
                  <h5>Stars:
                    {movie.stars.map((star, index) => (
                      <span key={index}>
                        <Link to={`${wiki}${URLformat(star)}`} target="_blank" rel="noopener noreferrer">{star}</Link>
                        {index < movie.stars.length - 1 && " • "}
                      </span>
                    ))}
                  </h5>
                  <hr />
                </div>
                <div className="d-flex">
                  <FaStar size="2rem" color='#ff9200' />
                  <h4 className="ms-md-2">{movie.rating}/10</h4>
                </div>
                <hr />
                <h5>OTT Release: {movie.ottDate}</h5>
                <hr />
                <div className="button-container d-flex flex-wrap">
                  <div className="col-xl-3">
                    <h1 className="trailer btn my-3" style={{ background: "black", padding: "0px" }}>
                      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
                        <div className="d-flex ms-md-3 mt-2">
                          <BsYoutube size={20} className="me-2 utube-logo" />
                          <p>Watch Trailer</p>
                        </div>
                      </a>
                    </h1>
                  </div>

                  <button className="btn border-0 bookmark col-xl-1 mx-3" onClick={handleBookmarkClick}>
                    {isBookmarked ? <BsBookmarkHeartFill size={30} color="red" /> : <BsBookmarkHeartFill size={30} color="black" />}
                  </button>

                  <button className="btn border-0 mb-5 me-md-5 col-xl-6">
                    <div className="share">
                      <span><FaShareAlt size={25} style={{ marginBottom: "38px" }} /></span>
                      {copied && (
                        <div style={{ position: 'absolute', top: '-7px', left: '0', background: 'green', color: 'white', padding: '2px', borderRadius: '3px' }}>
                          Copied!
                        </div>
                      )}
                      <Link className="copylink" style={{ position: 'relative', display: 'inline-block' }}>
                        <CopyToClipboard text={shareUrl} onCopy={handleCopy}>
                          <FaRegCopy color="black" style={{ cursor: 'pointer' }} />
                        </CopyToClipboard>
                      </Link>

                      <Link className="facebook">
                        <FacebookShareButton url={shareUrl}>
                          <FaFacebook color="black" />
                        </FacebookShareButton>
                      </Link>

                      <Link className="twitter">
                        <TwitterShareButton url={shareUrl}>
                          <FaXTwitter color="black" />
                        </TwitterShareButton>
                      </Link>

                      <Link className="whatsapp">
                        <WhatsappShareButton url={shareUrl}>
                          <ImWhatsapp color="black" />
                        </WhatsappShareButton>
                      </Link>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
