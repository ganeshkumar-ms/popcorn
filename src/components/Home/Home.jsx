import React, { useState, useEffect, useMemo } from 'react';
import './Home.css';
import { Footer } from '../Footer/Footer';
import { FaUserCircle } from 'react-icons/fa';
import { MdNewReleases, MdOutlineFiberNew, MdRateReview } from 'react-icons/md';
import { HiTrophy } from 'react-icons/hi2';

const Home = () => {
  const welcomeMessages = useMemo(() => [
    "Welcome",
    "स्वागत है",
    "வணக்கம்",
    "സ്വാഗതം",
    "స్వాగతం"
  ], []);

  const carouselImages = [
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/thug-life-et00375421-1699359629.jpg",
    "https://img.youtube.com/vi/6bg5tM2jmUU/maxresdefault.jpg",
    "https://i.ytimg.com/vi/M5Obyf-ILLs/maxresdefault.jpg"
  ];

  const [currentMessage, setCurrentMessage] = useState(welcomeMessages[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % welcomeMessages.length;
      setCurrentMessage(welcomeMessages[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, [welcomeMessages]);

  return (
    <div>
      <div className='home'>
        <div className="homebg">
          <h1 className="text-center position-relative welcome" style={{ paddingTop: "24px" }}>
            {currentMessage}
          </h1>
          <div className='account'>
            <a href="/login">
              <FaUserCircle size="38px" color='black' className='rounded-5 account-icon' />
            </a>
          </div>

          <div className="card border-0 my-3 m-md-4 mt-3">
            <div id="carouselRide" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {carouselImages.map((image, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index} data-bs-interval="2000">
                    <img src={image} className="d-block w-100" alt={`carousel-${index}`} />
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselRide" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#carouselRide" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>

        <div className='divider'>
          <img src={require("../Images/line.png")} className='line' alt="" />
        </div>
        <div className='w-100 sec2'>
          <img src={require("../Images/sideimg.png")} className='sideimg' alt="" />

          <div className='intro'>
            <img src={require("../Images/ticket.png")} className='ticket' alt="" />
            <ul className='menulist'>
              <li><a href="/reviews"><MdRateReview className='me-2 my-2 ' />Reviews </a></li>
              <li><a href="/newOTTs"><MdOutlineFiberNew className='me-2 my-2 ' />New OTT Releases</a></li>
              <li><a href="/exclusive"><MdNewReleases className='me-2 my-2 ' />Exclusive Updates</a></li>
              <li><a href="/movieoftheweek"><HiTrophy className='me-2 my-2 ' />Movie of the Week</a></li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
