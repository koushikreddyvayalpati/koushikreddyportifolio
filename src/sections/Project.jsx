import { useState, useRef, useEffect } from 'react';
import { myProjects } from '../constants';

const Project = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const projectCount = myProjects.length;
  const touchStartX = useRef(null);
  const carouselRef = useRef(null);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  // Mouse Click Navigation (For Larger Screens)
  const handleMouseClick = (e) => {
    const clickX = e.clientX;
    const screenWidth = window.innerWidth;
    const clickZone = screenWidth / 2;

    if (clickX < clickZone) {
      handleNavigation('previous'); // Clicked left
    } else {
      handleNavigation('next'); // Clicked right
    }
  };

  // Keyboard Navigation (Arrow Keys)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        handleNavigation('previous');
      } else if (e.key === 'ArrowRight') {
        handleNavigation('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Touch event handlers (Already Present)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    
    const touchCurrentX = e.touches[0].clientX;
    const diff = touchStartX.current - touchCurrentX;

    if (Math.abs(diff) > 50) {
      handleNavigation(diff > 0 ? 'next' : 'previous');
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  return (
    <section className="c-space my-20" id="project">
            <p className=" grid-headtext text-2xl text-white-800 ">Project Work</p>


      <div 
        className="carousel-container" 
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={handleMouseClick} // Click support for desktops
      >
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
      </div>
    </section>
  );
};

export default Project;
