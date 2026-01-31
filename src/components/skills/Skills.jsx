import './skills.css';
import SkillCard from './SkillCard';
import SEO from '../SEO';

const Skills = () => {
  return (
    <>
      <SEO
        description="Frontend Developer — portfolio of SHIVANSH SINGH"
        url="https://me-shivansh-singh.web.app/"
        image="https://me-shivansh-singh.web.app/default-og.png"
        keywords="frontend developer, react, javascript, shivansh singh"
      />
      <section className='skills section' id='skills'>
        <h2 className='section__title'>Skills</h2>
        <span className='section__subtitle'>
          My Technical level
        </span>

        <div className='skills__container container grid'>
          <SkillCard />
        </div>
      </section>\
    </>
  )
}

export default Skills