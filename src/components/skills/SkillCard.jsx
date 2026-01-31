import React from 'react'
import { skillConstant } from '../../constants/Skills'

const SkillCard = () => {

  return (
    <>
      {skillConstant.map((item) => {
        const { title, skills } = item;
        return (
          <div key={item.title} className='skills__content'>
            <h3 className='skills__title'>{title}</h3>

            <div className='skills__box'>
              <div className='skills__group'>
                {skills.map((skill, index) => {
                  return (
                    <div key={index} className='skills__data'>
                      <skill.icon className="skills__icon" />

                      <h3 className='skills__name'>{skill.name}</h3>

                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default SkillCard