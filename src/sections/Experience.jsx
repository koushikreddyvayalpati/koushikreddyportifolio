import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';
import Ownavatar from '../components/Ownavatar.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS library for scroll animations

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="c-space my-20" id="experience">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>
        <div className="work-container">
          <div className="work-canvas" style={{ width: '100%', height: '80vh' }}>
            <Canvas>
              <ambientLight intensity={6} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} autoRotate={true} // Enable auto-rotation
            autoRotateSpeed={2.0}/>
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera
                  makeDefault
                  position={[0, 1.4, 5]}
                />
                <Ownavatar scale={1.8} position={[0, -1.7, 0]} rotation={[0, 0, 0]} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  className="work-content_container group"
                  data-aos="fade-up" // Add fade-up animation on scroll
                  data-aos-delay={`${index * 200}`} // Delay each item to stagger the animations
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo transition-transform transform hover:scale-110">
                      <img className="w-full h-full" src={item.icon} alt={item.name} />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
