
import { webDevProjects } from '../../utils/data';
import { HorizontalItemStyled } from './HorizontalCarouselStyles'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const HorizontalCarousel = () => {
  return (
    <div>
      <Splide
        className="splide"
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
                  title={index}
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


export default HorizontalCarousel;
