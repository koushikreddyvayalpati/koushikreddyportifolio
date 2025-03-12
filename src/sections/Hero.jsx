import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Hackeroom from '../components/Hackeroom'; // Using your Hackeroom component
import CanvasLoader from '../components/CanvasLoader';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 768 }); // Define a breakpoint for small devices

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative" id="home">
      {/* Overlay text */}
      <div className="absolute top-14 w-full text-center z-5">
        <p className="text-xl sm:text-2xl font-medium text-sky-300 font-generalsans">
          Hi, I am Koushik <span className="waving-hand">🙋</span>
        </p>
        <p className="text-4xl sm:text-5xl font-bold text-gray_gradient">
          Innovative, Adaptive, Collaborative
        </p>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[15, 0, 23]} />
            <Hackeroom 
              scale={isSmallDevice ? 11 : 15} // Adjust scale for smaller devices
              position={[0, isSmallDevice ? -6 : -6, 0]} // Adjust position for smaller devices
              rotation={[0, 0, 0]} 
            />
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls
              autoRotate={true} 
              autoRotateSpeed={2.0} 
              enableZoom={true} 
              enablePan={false} 
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Freelancing Section */}
      <div className="absolute bottom-12 w-full text-center z-20 mb-8">
        <p className="text-lg sm:text-xl font-medium text-sky-600">Open to Opportunities</p>
        <p className="text-sm sm:text-md text-gray-400 mt-3">
          Seeking full-time roles and offering freelance services in Web & Mobile Development. Let’s connect!
        </p>
      </div>
    </section>
  );
};

export default Hero;
