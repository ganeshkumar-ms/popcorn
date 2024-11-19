import React from 'react'
import './Reviews.css'
import { Footer } from '../Footer/Footer'
import { BsBookmarkHeartFill } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
import Reviewssvg from '../svg/reviewssvg'

export const Reviews = () => {
  const [bookmarks, setBookmarks] = useState([false, false, false, false]);

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

        <div className='card d-grid position-relative border-0 p-3 m-4' style={{ background: "linear-gradient(to bottom, #564b4ae1, #d2d5a2, #E6EFC2)" }}>
          <div className='row'>
            <img src="https://pbs.twimg.com/media/Ga0uHSDawAAXSNX?format=jpg&name=large" alt="" className='position-relative col-md-4 col-12 border-end border-4 border-warning' style={{ height: "300px" }} />
            <div className='col-12 col-md-5 ms-md-3 mt-2'>
              <h2 className='moviname'>Hitler (Tamil|2024)</h2>
              <div className='my-2'>
                <button className='btn rounded-5 btn-dark platform'><a href="https://www.primevideo.com/offers/nonprimehomepage/ref=atv_dl_rdr" target='_blank' rel="noopener noreferrer">Amazon Prime</a></button>
                <button className='btn ms-3 border-0' onClick={() => handleBookmarkClick(1)}>
                  {bookmarks[1] ? (<BsBookmarkHeartFill size={28} color="red" />) : (<BsBookmarkHeartFill size={28} color="black" />)}
                </button>
              </div>
              <h4>
                Kinda Modified version of “GentleMan”. Such an Outdated film; Predictable scenes with no high moments. Nothing to rave abt artists performance & characterization. Gud to see CharanRaj. Bad 1st hlf & Avg 2nd. Narration is Mega BORE!</h4>
              <div class="d-flex my-3">
                <FaStar size="2rem" color='#ff9200' />
                <h4 class="ms-2">1.5/5</h4>
              </div>
            </div>
          </div>
        </div>

        <div className='card d-grid position-relative border-0 p-3 m-4' style={{ background: "linear-gradient(to bottom, #564b4ae1, #d2d5a2, #E6EFC2)" }}>
          <div className='row'>
            <img src="https://pbs.twimg.com/media/GaoZm2IWoAAIbmD?format=jpg&name=900x900" alt="" className='position-relative col-md-4 col-12 border-end border-4 border-warning' style={{ height: "300px" }} />
            <div className='col-md-5 col-12 ms-md-3 mt-2 '>
              <h2 className='moviname'>BlinkTwice (English|2024)</h2>
              <div className='my-2'>
                <button className='btn rounded-5 btn-dark platform'><a href="https://www.primevideo.com/offers/nonprimehomepage/ref=atv_dl_rdr" target='_blank' rel="noopener noreferrer">Amazon Prime</a></button>
                <button className='btn ms-3 border-0' onClick={() => handleBookmarkClick(2)}>
                  {bookmarks[2] ? (<BsBookmarkHeartFill size={28} color="red" />) : (<BsBookmarkHeartFill size={28} color="black" />)}
                </button>
              </div>
              <h4>
                Channing Tatum super Perf. Naomi ok. Visually Rich. Thr r lot of drinks & drugs, but no excitement or tension. Repetetive scenes r thr for more than an Hour. Familiar Twists r major drawback. AVERAGE Psychological Thriller!</h4>
              <div class="d-flex my-3">
                <FaStar size="2rem" color='#ff9200' />
                <h4 class="ms-2">3.5/5</h4>
              </div>
            </div>
          </div>
        </div>



        <div className='card d-grid position-relative border-0 p-3 m-4' style={{ background: "linear-gradient(to bottom, #564b4ae1, #d2d5a2, #E6EFC2)" }}>
          <div className='row'>
            <img src="https://pbs.twimg.com/media/GaeBCOHWsAAHT6E?format=jpg&name=900x900" alt="" className='position-relative col-md-4 col-12 border-end border-4 border-warning' style={{ height: "300px" }} />
            <div className='col-md-5 col-12 mt-2 ms-md-3'>
              <h2 className='moviname'>Trouble / Strul (Swedish|2024)</h2>
              <div className='my-2'>
                <button className='btn rounded-5 btn-dark platform'><a href="https://www.netflix.com" target='_blank' rel="noopener noreferrer">Netflix</a></button>
                <button className='btn ms-3 border-0' onClick={() => handleBookmarkClick(3)}>
                  {bookmarks[3] ? (<BsBookmarkHeartFill size={28} color="red" />) : (<BsBookmarkHeartFill size={28} color="black" />)}
                </button>
              </div>
              <h4>
                About an Electrician who was weongly convicted of murder, how he prove his innocence. Uneven Perf. Here & thr very few comedy scenes bring laughs. Otherwise its quite Flat, No Logics. A Highly Outdated Comedy Thriller. BELOW AVERAGE!</h4>
              <div class="d-flex my-3">
                <FaStar size="2rem" color='#ff9200' />
                <h4 class="ms-2">3.75/5</h4>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
