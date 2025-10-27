import React from 'react'

const ProjectCard = ({ index, category, toggleState, toggleTab }) => {
  const { title, icon, projects } = category;
  return (
    <div key={index} className='portfolio__content'>
      <div>
        <i className={` ${icon} portfolio__icon`}></i>
        <h3 className='portfolio__title'>{title}</h3>
      </div>

      <span className='portfolio__button' onClick={() => toggleTab(projects[0].id)}>
        View
        <i className='uil uil-arrow-right portfolio__button-icon'></i>
      </span>

      {projects.map((project, pIndex) => {
        const { id, pTitle, description, demoLink, repoLink, more } = project;
        return (
          <div key={pIndex} className={`portfolio__modal ${toggleState === id ? 'active-modal' : ''}`}>
            <div className='portfolio__modal-content'>
              <i className='uil uil-times portfolio__modal-close' onClick={() => toggleTab(0)}></i>
              <h3 className='portfolio__modal-title'>{title} Projects</h3>
              <p className='portfolio__modal-description'>Check out some of my projects related to {title}.</p>

              <ul className='portfolio__modal-projects grid'>

                <li className='portfolio__modal-item'>
                  <iframe
                    src={demoLink}
                    title={pTitle}
                    frameBorder="0"
                  ></iframe>
                  <div className='portfolio__modal-project-data'>
                    <div className='portfolio__modal-project-header'>
                      <h3 className='portfolio__modal-project-title'>
                        <a href={demoLink} target="_blank" rel="noopener noreferrer">{pTitle}</a>
                        <i className="uil uil-arrow-up-right"></i>
                      </h3>
                      <div className='portfolio__modal-project-buttons'>
                        <a className=' portfolio__modal-project-button' href={repoLink} target="_blank" rel="noopener noreferrer">Repo</a>
                        <a className='portfolio__modal-project-button' href={more} target="_blank" rel="noopener noreferrer">More</a>
                      </div>
                    </div>
                    <div className='portfolio__modal-project-body'>
                      <p className='portfolio__modal-project-description'>{description}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectCard