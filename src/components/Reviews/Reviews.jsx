import React, { useState } from 'react';
import './Reviews.css';
import { Footer } from '../Footer/Footer';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import Reviewssvg from '../svg/reviewssvg';

const ReviewsData = [
  {
    moviename: "Sookshmadarshini",
    language: "Malayalam",
    poster: "https://pbs.twimg.com/media/GdMygQZWsAAZDPa?format=jpg&name=900x900",
    ottplatform: "www.netlflix.com",
    platformName: "Netflix",
    review: "On similar lines to “KishkindaKaandam”. Simple plot, Superb Casting. Both Nazriya & Basil Gud Perf. BGM Pakka. Though Engaging, 1st Hlf tests patience, 2nd Hlf is Interesting with a Neat Climax. A DECENT ‘Slow Burn’ Mystery Thriller!",
    rating: "8.5"
  },
  {
    moviename: "Hitler",
    language: "Tamil",
    poster: "https://pbs.twimg.com/media/Ga0uHSDawAAXSNX?format=jpg&name=large",
    ottplatform: "https://www.primevideo.com/offers/nonprimehomepage/ref=atv_dl_rdr",
    platformName: "Amazon Prime",
    review: "Kinda Modified version of 'GentleMan'. Such an Outdated film; Predictable scenes with no high moments. Nothing to rave abt artists performance & characterization. Gud to see CharanRaj. Bad 1st hlf & Avg 2nd. Narration is Mega BORE!",
    rating: "6.5"
  },
 
];

const MovieReviewCard = ({ movie, index, handleBookmarkClick, isBookmarked }) => (
  <div className='review'>
  <div className='card border-0 m-2 mb-4' style={{ background: "linear-gradient(to bottom, #564b4ae1, #d2d5a2, #E6EFC2)" }}>
    <div className='d-flex'>
      <div className='poster'>
      <img src={movie.poster} alt="Movie Poster" className='position-relative' />
      </div>
      <div className='m-3 textreview'>
        <h2 className='moviname'>{movie.moviename} ({movie.language})</h2>
        <div className='my-2 buttons'>
          <button className='btn rounded-5 btn-dark platform'>
            <a href={movie.ottplatform} target='_blank' rel="noopener noreferrer">{movie.platformName}</a>
          </button>
          <button className='btn ms-md-3 border-0 ' onClick={() => handleBookmarkClick(index)}>
            <BsBookmarkHeartFill className='bookmark' size={28} color={isBookmarked ? "red" : "black"} />
          </button>
        </div>
        <h4>{movie.review}</h4>
        <div className="d-flex my-3">
          <FaStar className='starlogo' size="1.5rem" color='#ff9200' />
          <h4 className="ms-2">{movie.rating}/10</h4>
        </div>
      </div>
    </div>
    </div>
    </div>

);

export const Reviews = () => {
  const [bookmarks, setBookmarks] = useState(Array(ReviewsData.length).fill(false));
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3; 
  const handleBookmarkClick = (index) => {
    const newBookmarks = [...bookmarks];
    newBookmarks[index] = !newBookmarks[index];
    setBookmarks(newBookmarks);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentReviews = ReviewsData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(ReviewsData.length / cardsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='bgi'>
      <div>
        <div className='text-center mt-4'>
          <Reviewssvg />
          <hr style={{ color: "beige" }} />
        </div>

        {/* Loop through ReviewsData and render MovieReviewCard for each review */}
        {currentReviews.map((movie, index) => (
          <MovieReviewCard
            key={index}
            movie={movie}
            index={index}
            handleBookmarkClick={handleBookmarkClick}
            isBookmarked={bookmarks[index]}
          />
        ))}
<hr style={{color:"beige"}} />
        {/* Pagination Controls */}
        <div className="pagination-controls">
          <button className="btn btn-dark" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
          <span style={{color:'lightgray'}}>Page {currentPage} of {totalPages}</span>
          <button className="btn btn-dark" onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
     
      <Footer />
    </div>
  );
};
