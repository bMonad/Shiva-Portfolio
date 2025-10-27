import { useState } from 'react';
import './project.css'
import ProjectCard from './ProjectCard'
import { portfolioConstants } from '../../constants/Portfolio';

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (id) => {
    setToggleState(id);
  }

  return (
    <section className='portfolio section' id='portfolio'>
      <h2 className='section__title'> Portfolio</h2>
      <span className='section__subtitle'>My Work Sample</span>

      <div className='portfolio__container container grid'>
        {portfolioConstants.map((category, index) => {
          return (
            <ProjectCard key={index} category={category} toggleState={toggleState} toggleTab={toggleTab} />
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio;