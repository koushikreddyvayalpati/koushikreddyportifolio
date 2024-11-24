import { useState } from 'react';
import { myProjects } from '../constants/Index.js';

const Project = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const projectCount = myProjects.length;

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20" id="project">
      <p className="head-text">Project Work</p>

      <div className="carousel-container">
        <div className="carousel-content">
          {myProjects.map((project, index) => {
            const offset = index - selectedProjectIndex;
            const isActive = offset === 0;

            return (
              <div
                key={index}
                className={`carousel-slide ${isActive ? 'active' : ''}`}
                style={{
                  transform: `rotateY(${offset * 60}deg) translateZ(400px)`,
                  opacity: isActive ? 1 : 0.5,
                  transition: 'transform 0.5s ease, opacity 0.5s ease',
                }}
              >
                <div className="carousel-item">
                  <img
                    src={project.spotlight}
                    alt={project.title}
                    className="carousel-image"
                  />
                  {isActive && (
                    <div className="carousel-info">
                      <p className="project-title">{project.title}</p>
                      <p className="project-desc">{project.desc}</p>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="live-site-link"
                      >
                        Click here for more info
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="carousel-nav">
          <button
            className="arrow-btn prev-btn"
            onClick={() => handleNavigation('previous')}
          >
            &#8592;
          </button>

          <button
            className="arrow-btn next-btn"
            onClick={() => handleNavigation('next')}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
