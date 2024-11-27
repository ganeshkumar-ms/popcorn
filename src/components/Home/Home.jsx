import React, { useState, useEffect } from 'react';
import './Home.css'
import { Footer } from '../Footer/Footer';
import { FaUserCircle } from 'react-icons/fa';

const Home = () => {
  const welcomeMessages = [
    "Welcome",
    "स्वागत है",
    "வணக்கம்",
    "സ്വാഗതം",
    "స్వాగతం"
  ];

  const [currentMessage, setCurrentMessage] = useState(welcomeMessages[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % welcomeMessages.length;
      setCurrentMessage(welcomeMessages[index]);
    }, 2000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='home'>
      <div className="homebg">
        <h1 className="text-center pt-4 position-relative welcome">
          {currentMessage}
        </h1>
        <div className='account'>
          <a href="/login"><FaUserCircle size="38px" color='grey' className='rounded-5 account-icon' /></a>
        </div>

        <div className="card border-0 my-3 mt-3">
          <div id="carouselRide" className="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="2000">
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/thug-life-et00375421-1699359629.jpg" class="d-block w-100" alt="" />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="https://img.youtube.com/vi/6bg5tM2jmUU/maxresdefault.jpg" class="d-block w-100" alt="" />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="https://i.ytimg.com/vi/M5Obyf-ILLs/maxresdefault.jpg" class="d-block w-100" alt="" />
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselRide" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselRide" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
