import './about.css'
import Aboutme from '../../assets/profile_pic.jpg'
import CV from '../../assets/Shivansh_Singh_Resume.pdf'
import Files from '../../assets/files.svg'
import Info from './Info'
import { useMemo, useState } from 'react'
import SEO from '../SEO'


const TABS = [
  { key: 'experience', label: 'Experience', icon: 'uil uil-briefcase-alt' },
  { key: 'education', label: 'Education', icon: 'uil uil-graduation-cap' }
];

const About = () => {
  const [page, setPage] = useState('experience');

  const tabButtons = useMemo(() => (
    TABS.map(tab => (
      <button
        key={tab.key}
        className={`about__tab${page === tab.key ? ' about__tab--active' : ''}`}
        onClick={() => setPage(tab.key)}
        type="button"
        aria-selected={page === tab.key}
      >
        <i className={`${tab.icon} about__icon`}></i>
        {tab.label}
      </button>
    ))
  ), [page]);

  return (
    <>
      <SEO
        title="About Me"
        description="Frontend Developer — portfolio of SHIVANSH SINGH"
        url="https://me-shivansh-singh.web.app/"
        image="https://me-shivansh-singh.web.app/default-og.png"
        keywords="frontend developer, react, javascript, shivansh singh"
      />
      <section className='about section' id='about'>
        <h2 className='section__title'>About Me</h2>
        <span className='section__subtitle container'>
          I am a passionate web developer with experience in building dynamic and responsive web applications.I enjoy turning complex problems into simple, beautiful, and intuitive designs.
        </span>

        <div className="about__tabs">
          {tabButtons}
        </div>

        <div className='about__container container'>
          <Info page={page} />
        </div>
        <a download='' href={CV} className='button button--flex'>
          Download CV
          <img src={Files} alt='Files' style={{ marginLeft: '0.1rem' }} />
        </a>
      </section>
    </>
  )
}

export default About