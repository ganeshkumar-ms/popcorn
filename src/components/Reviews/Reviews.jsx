import React, { useState } from 'react';
import './Reviews.css';
import { Footer } from '../Footer/Footer';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import Reviewssvg from '../svg/reviewssvg';

const ReviewsData = [
  {
    moviename: "Hitler",
    language: "Tamil",
    poster: "https://pbs.twimg.com/media/Ga0uHSDawAAXSNX?format=jpg&name=large",
    ottplatform: "https://www.primevideo.com/offers/nonprimehomepage/ref=atv_dl_rdr",
    platformName: "Amazon Prime",
    review: "Kinda Modified version of 'GentleMan'. Such an Outdated film; Predictable scenes with no high moments. Nothing to rave abt artists performance & characterization. Gud to see CharanRaj. Bad 1st hlf & Avg 2nd. Narration is Mega BORE!",
    rating: "6.5"
  }
];

const MovieReviewCard = ({ movie, index, handleBookmarkClick, isBookmarked }) => (
  <div className='card d-grid position-relative border-0 p-3 m-4' style={{ background: "linear-gradient(to bottom, #564b4ae1, #d2d5a2, #E6EFC2)" }}>
    <div className='row'>
      <img src={movie.poster} alt="Movie Poster" className='position-relative col-md-4 col-12 border-end border-4 border-warning' style={{ height: "300px" }} />
      <div className='col-12 col-md-5 ms-md-3 mt-2'>
        <h2 className='moviname'>{movie.moviename} ({movie.language})</h2>
        <div className='my-2'>
          <button className='btn rounded-5 btn-dark platform'>
            <a href={movie.ottplatform} target='_blank' rel="noopener noreferrer">{movie.platformName}</a>
          </button>
          <button className='btn ms-3 border-0' onClick={() => handleBookmarkClick(index)}>
            <BsBookmarkHeartFill size={28} color={isBookmarked ? "red" : "black"} />
          </button>
        </div>
        <h4>{movie.review}</h4>
        <div className="d-flex my-3">
          <FaStar size="2rem" color='#ff9200' />
          <h4 className="ms-2">{movie.rating}/10</h4>
        </div>
      </div>
    </div>
  </div>
);

export const Reviews = () => {
  const [bookmarks, setBookmarks] = useState(Array(ReviewsData.length).fill(false));

  const handleBookmarkClick = (index) => {
    const newBookmarks = [...bookmarks];
    newBookmarks[index] = !newBookmarks[index];
    setBookmarks(newBookmarks);
  };

  return (
    <div className='bgi'>
      <div>
        <div className='text-center mt-4'>
          <Reviewssvg />
          <hr style={{ color: "beige" }} />
        </div>

        {/* Loop through ReviewsData and render MovieReviewCard for each review */}
        {ReviewsData.map((movie, index) => (
          <MovieReviewCard
            key={index}
            movie={movie}
            index={index}
            handleBookmarkClick={handleBookmarkClick}
            isBookmarked={bookmarks[index]}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
