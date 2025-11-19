import React from 'react'
import leetcode from '../../assets/leetcode.jpg'
const Social = () => {
  return (
    <div className='home__social' >
      <a href="https://www.linkedin.com/in/shivanshsingh1706/" target="_blank" rel="noopener noreferrer" className='home__social-icon'>
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a href="https://github.com/bMonad" target="_blank" rel="noopener noreferrer" className='home__social-icon'>
        <i className="uil uil-github-alt"></i>
      </a>
      <a href="https://leetcode.com/u/rudraVal/" target="_blank" rel="noopener noreferrer" className='home__social-icon'>
        <img src={leetcode} alt="Leetcode" />
      </a>
    </div>
  )
}

export default Social