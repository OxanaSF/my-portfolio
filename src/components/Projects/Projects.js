import HorizontalCarousel from '../HorizontalCarousel';
import { ProjectsStyled } from './ProjectStyles';

const Projects = (props) => {
  return (
    <ProjectsStyled id="projects">
      <div className="portfolio-title">Projects</div>

      <HorizontalCarousel />
    </ProjectsStyled>
  );
};

export default Projects;
