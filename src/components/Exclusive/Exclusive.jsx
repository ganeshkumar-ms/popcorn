import React, { useState } from 'react';
import { Footer } from '../Footer/Footer';
import Exclusivesvg from '../svg/exclusivesvg';
import './Exclusive.css';

const Exclusive = () => {
  const exclusiveData = [
    {
      image: "https://industryhit.com/t/wp-content/uploads/2024/06/IMG_1794.jpeg",
      text: 'From Ajith\'s "Good Bad Ugly" Music Director DSP OUT, New Music Director GV Prakash IN',
      alt: "GBU Update"
    },
    
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = exclusiveData.slice(indexOfFirstCard, indexOfLastCard);

  const nextPage = () => {
    if (currentPage < Math.ceil(exclusiveData.length / cardsPerPage)) {
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
      <div className='text-center w-100 mt-4'>
        <Exclusivesvg />
        <hr style={{ color: "beige" }} />

        <div className='container-fluid xclusive'>
          {currentCards.map((item, index) => (
            <div key={index} className='card border-0 rounded-3 m-2 mb-4 position-relative'>
              <img
                src={item.image}
                alt={item.alt}
                className='image-fluid border-0 w-100 rounded-3'
                style={{ height: "500px" }}
              />
              <h4
                className='position-absolute bg-warning-subtle text-center p-3 w-100'
                style={{
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "black",
                  zIndex: 1
                }}
              >
                {item.text}
              </h4>
            </div>
          ))}
        </div>
        <hr style={{color:"beige"}}/>
        <div className="pagination-controls">
          <button  className="btn btn-dark" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
          <span style={{color:'lightgray'}}>Page {currentPage} of {Math.ceil(exclusiveData.length / cardsPerPage)}</span>
          <button className="btn btn-dark" onClick={nextPage} disabled={currentPage === Math.ceil(exclusiveData.length / cardsPerPage)}>Next</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Exclusive;
