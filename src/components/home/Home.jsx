import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
import SEO from '../SEO'

const Home = ({ setActiveNav }) => {
  return (
    <>
      <SEO
        title="Home"
        description="Frontend Developer — portfolio of SHIVANSH SINGH"
        url="https://me-shivansh-singh.web.app/"
        image="https://me-shivansh-singh.web.app/default-og.png"
        keywords="frontend developer, react, javascript, shivansh singh"
      />
      <main className='home section' id='home'>
        <div className='home__container container grid'>
          <div className='home__content grid'>
            <Social />
            <div className='home__img' ></div>
            <Data setActiveNav={setActiveNav} />
          </div>
          <ScrollDown />
        </div>
      </main>
    </>
  )
}

export default Home