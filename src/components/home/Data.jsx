import React from 'react'
import hand from '../../assets/wave.svg'
import send from '../../assets/send.svg'
import { Link } from 'react-router-dom'
const Data = () => {
  return (
    <div className='home__data'>
      <h1 className='home__title'>Shivansh Singh <img src={hand} alt="hand" className='home__hand' /></h1>
      <h3 className='home__subtitle'>Software Developer</h3>
      <p className='home__description'>Software enthusiast with experience in building web applications using modern technologies. Love to learn and explore new technologies.</p>

      <Link to="/contact" className='contact-button button button--flex'>
        Contact Me
        <img src={send} alt="send" style={{ marginLeft: '0.1rem' }} />
      </Link>
    </div>
  )
}

export default Data