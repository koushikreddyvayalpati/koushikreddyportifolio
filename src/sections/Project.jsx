import { useState, useEffect } from 'react';
import { myProjects } from '../constants/Index.js';

const Project = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projectCount = myProjects.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setSelectedProjectIndex((prevIndex) => 
        prevIndex === projectCount - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [projectCount, isAutoPlaying]);

  const handleNavigation = (direction) => {
    setIsAutoPlaying(false);
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToProject = (index) => {
    setSelectedProjectIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden" id="project">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence across various domains
          </p>
        </div>

        {/* Main Carousel Container */}
        <div className="relative">
          
          {/* Featured Project Display */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            
            {/* Project Image */}
            <div className="relative group" data-aos="fade-right">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-1">
                <div className="relative overflow-hidden rounded-xl bg-black">
                  <img
                    src={currentProject.spotlight}
                    alt={currentProject.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500/90 text-white text-sm rounded-full backdrop-blur-sm">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gray-900/90 text-white text-sm rounded-full backdrop-blur-sm">
                      {selectedProjectIndex + 1} of {projectCount}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            </div>

            {/* Project Info */}
            <div className="space-y-6" data-aos="fade-left">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {currentProject.title.replace(/-/g, ' ')}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {currentProject.desc}
                </p>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {/* Category Badge */}
                {currentProject.category && (
                  <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-semibold">
                    {currentProject.category}
                  </span>
                )}
                {/* Tech Stack */}
                {currentProject.tech ? currentProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full text-sm hover:border-blue-500/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                )) : ['Python', 'Machine Learning', 'Web Development', 'Mobile App'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full text-sm hover:border-blue-500/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={currentProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Project
                </a>
                <button className="btn-secondary inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Live Demo
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-between mb-8">
            
            {/* Previous Button */}
            <button
              onClick={() => handleNavigation('previous')}
              className="group flex items-center justify-center w-12 h-12 bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {myProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedProjectIndex 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handleNavigation('next')}
              className="group flex items-center justify-center w-12 h-12 bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Project Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" data-aos="fade-up">
            {myProjects.map((project, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
                  index === selectedProjectIndex 
                    ? 'ring-2 ring-blue-500 scale-105' 
                    : 'hover:scale-105 hover:ring-2 hover:ring-gray-400'
                }`}
              >
                <div className="aspect-video relative">
                  <img
                    src={project.spotlight}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    index === selectedProjectIndex 
                      ? 'bg-blue-500/20' 
                      : 'bg-black/40 group-hover:bg-black/20'
                  }`}></div>
                  
                  {/* Play Button Overlay */}
                  {index !== selectedProjectIndex && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Project Title */}
                <div className="p-3 bg-gray-800/50 backdrop-blur-sm">
                  <h4 className={`text-sm font-medium truncate transition-colors ${
                    index === selectedProjectIndex ? 'text-blue-400' : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {project.title.replace(/-/g, ' ').slice(0, 20)}...
                  </h4>
                </div>
              </button>
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex items-center justify-center mt-8 gap-3">
            <div className={`w-2 h-2 rounded-full transition-colors ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}`}></div>
            <span className="text-gray-400 text-sm">
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </span>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-gray-400 hover:text-white text-sm underline transition-colors"
            >
              {isAutoPlaying ? 'Pause' : 'Resume'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
