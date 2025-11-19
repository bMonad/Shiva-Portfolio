import { useState } from 'react';
import './project.css'
import ProjectCard from './ProjectCard'
import { portfolioConstants } from '../../constants/Portfolio';
import SEO from '../SEO';

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (id) => {
    setToggleState(id);
  }

  return (
    <>
      <SEO
        title="Portfolio"
        description="Frontend Developer — portfolio of SHIVANSH SINGH"
        url="https://me-shivansh-singh.web.app/"
        image="https://me-shivansh-singh.web.app/default-og.png"
        keywords="frontend developer, react, javascript, shivansh singh"
      />
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
    </>
  )
}

export default Portfolio;