import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { webDevProjects } from './data';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const HorizontalCarousel = () => {
  return (
    <div>
      <Splide
      className='splide'
        options={{
          perPage: 2,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5ram',

        }}
      >
        {webDevProjects.map((project, index) => {
          return (
            <SplideSlide key={index}>
              <HorizontalItemStyled>
                <iframe
                  className="horizontal-item-inside"
                  src={project.url}
                ></iframe>
              </HorizontalItemStyled>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

const HorizontalItemStyled = styled(motion.div)`
  height: 35rem;
  width: 45rem;
  border-top: 0.5px solid lightgrey;
  padding: 80px 40px;
  cursor: pointer;

  .splide {
    background: red;
  }

  .horizontal-item-inside {
    width: 100%;
    height: 100%;
    border-radius: 1.2rem;
    border: 0.5px solid black;
  }
`;

export default HorizontalCarousel;
