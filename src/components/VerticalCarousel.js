import styled from 'styled-components';
import { motion } from 'framer-motion';
import { webDevProjects } from '../utils/data';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const VerticalCarousel = () => {
  return (
    <div>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5ram',
        }}
      >
        {webDevProjects.map((project, index) => {
          return (
            <SplideSlide key={index}>
              <VerticalItemStyled>
                <iframe
                  className="vertical-item-inside"
                  src={project.url}
                ></iframe>
              </VerticalItemStyled>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

const InnerCarouselStyled = styled(motion.div)`
  display: flex;
`;

const VerticalItemStyled = styled(motion.div)`
  height: 53rem;
  width: 30rem;
  border-top: 0.5px solid lightgray;
  padding: 80px 40px;
  cursor: pointer;
`;

export default VerticalCarousel;
