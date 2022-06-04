import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { webDevProjects } from "./data";

const HorizontalCarousel = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <InnerCarouselStyled
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {webDevProjects.map((project, index) => {
            return (
              <HorizontalItemStyled key={index}>
                <motion.iframe
                  className="horizontal-item-inside"
                  src={project.url}
                ></motion.iframe>
              </HorizontalItemStyled>
            );
          })}
        </InnerCarouselStyled>
      </motion.div>
    </div>
  );
};

const InnerCarouselStyled = styled(motion.div)`
  display: flex;
`;

const HorizontalItemStyled = styled(motion.div)`
  min-height: 40rem;
  min-width: 60rem;
  padding: 40px;

  .horizontal-item-inside {
    width: 100%;
    height: 100%;
    border-radius: 1.8rem;
  }
`;

export default HorizontalCarousel;
