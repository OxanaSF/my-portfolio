import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { webDevProjects } from "./data";

const VerticalCarousel = () => {
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
        >
          {webDevProjects.map((project, index) => {
            return (
              <VerticalItemStyled key={index}>
                <motion.iframe
                  className="vertical-item-inside"
                  src={project.url}
                ></motion.iframe>
              </VerticalItemStyled>
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

const VerticalItemStyled = styled(motion.div)`
  min-height: 53rem;
  min-width: 30rem;
  padding: 40px;

  .vertical-item-inside {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
  }
`;

export default VerticalCarousel;
