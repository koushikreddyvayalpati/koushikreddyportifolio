import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera ,Environment,} from '@react-three/drei';
import Hackeroom from '../components/Hackeroom'; // Using your Hackeroom component
import CanvasLoader from '../components/CanvasLoader';
import { OrbitControls } from '@react-three/drei';
import { calculateSizes } from '../constants/Index.js';
import Reactlogo from '../components/Reactlogo.jsx';
import { useMediaQuery } from 'react-responsive';
import Pythonlogo from '../components/Pythonlogo.jsx';
const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative" id="home">
      {/* Overlay text */}
      <div className="absolute top-1/4 w-full text-center z-10 -mt-10">
        <p className="text-xl sm:text-2xl font-medium text-white font-generalsans">
          Hi, I am Koushik <span className="waving-hand">🙋</span>
        </p>
        <p className="text-4xl sm:text-5xl font-bold text-gray_gradient ">
          Innovative, Adaptive, Collabrative
        </p>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[15, 5, 23]} />
            <Hackeroom 
              scale={15} 
              position={[0, -9, 0]} 
              rotation={[0, 0, 0]} 
            />
            <group>
              {/* <Reactlogo position={sizes.reactLogoPosition} /> */}
              {/* <Pythonlogo position={sizes.cubePosition}/> */}
            </group>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            {/* <Environment preset="city" /> */}
            <OrbitControls
            autoRotate={true} // Enable auto-rotation
            autoRotateSpeed={2.0} // Adjust rotation speed
            enableZoom={true} // Allow zooming
            enablePan={false} // Disable panning
          />
          
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
