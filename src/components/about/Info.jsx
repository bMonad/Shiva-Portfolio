import React from 'react'
import { educationConstant, experienceConstant } from '../../constants/AboutInfo';

const Info = ({ page }) => {
  const data = page === 'experience' ? experienceConstant : educationConstant;
  return (
    <div className='about__section'>
      {data.map((item, index) => (
        <div key={index} className='about__item'>
          <div className='about__item-header'>
            <div className='about__header'>
              <img src={item.logo} alt={item.company} className='about__icon' />
              <div>
                <h3 className='about__title'>{item.title}</h3>
                <h4 className='about__subtitle'>{item.institute}</h4>
              </div>
            </div>
            <div className='about__calender'>
              <i className={`${item.icon} about__icon`}></i>
              {item.duration}
            </div>
          </div>
          <ul className='about__description' >
            {item.details.map((detail, index) => (
              <li key={index} className='about__detail'>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Info