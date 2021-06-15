import React from 'react';

import '../assets/styles/components/Carousel.scss'

const Careousel = ({children}) => {
    return (
      <section className="carousel">
        <div className="carousel__container">
            {children}
        </div>
      </section>
    );
}
 
export default Careousel;