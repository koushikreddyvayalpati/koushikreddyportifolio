import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Hackeroom from '../components/Hackeroom';
import CanvasLoader from '../components/CanvasLoader';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 768 });
  const isMediumDevice = useMediaQuery({ maxWidth: 1024 });

  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black" id="home">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 h-full min-h-screen flex flex-col lg:flex-row items-center">
        
        {/* Left Side - 3D Model */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[15, 0, 23]} />
              <Hackeroom 
                scale={isSmallDevice ? 8 : isMediumDevice ? 12 : 16}
                position={[isSmallDevice ? 0 : -2, isSmallDevice ? -4 : -8, 0]}
                rotation={[0, isSmallDevice ? 0 : 0.3, 0]} 
              />
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 10]} intensity={1.2} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
              <OrbitControls
                autoRotate={true} 
                autoRotateSpeed={1.5} 
                enableZoom={false} 
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
              />
            </Suspense>
          </Canvas>
          
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 hidden lg:block">
            <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center backdrop-blur-sm">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="absolute bottom-20 right-10 hidden lg:block">
            <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center backdrop-blur-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 px-6 sm:px-8 lg:px-12 xl:px-16 py-8 lg:py-0 flex flex-col justify-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6 w-fit backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Available for Work</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Hi, I&apos;m</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Koushik Reddy
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-6 font-light">
            Application Engineer & Full-Stack Developer
          </p>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
            Crafting innovative digital experiences with React Native, React.js, and modern backend technologies. 
            Passionate about building scalable solutions that drive business growth.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-400">Bug Reduction</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white">40%</div>
              <div className="text-sm text-gray-400">Efficiency Boost</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-white">300+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center shadow-lg"
            >
              Let&apos;s Work Together
            </a>
            <a 
              href="#about" 
              className="border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/5 text-center backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8">
            <a 
              href="https://github.com/koushikreddyvayalpati" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.62-4.04-1.62-.54-1.36-1.33-1.72-1.33-1.72-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.5.12-3.12 0 0 1-.32 3.3 1.23a11.44 11.44 0 013-.4c1.02 0 2.04.14 3 .4 2.31-1.55 3.3-1.23 3.3-1.23.66 1.62.24 2.82.12 3.12.77.84 1.24 1.91 1.24 3.22 0 4.59-2.8 5.61-5.48 5.91.44.38.82 1.14.82 2.29v3.39c0 .32.22.69.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/vayalpatikoushikreddy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zM8.3 20.4h-3.5v-10.4h3.5v10.4zM6.5 8.6c-1.2 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1zM20.4 20.4h-3.5v-5.6c0-1.3-.5-2.2-1.8-2.2-.9 0-1.5.6-1.7 1.1-.1.3-.1.8-.1 1.2v5.5h-3.5s.1-9 0-10.4h3.5v1.5c.5-.8 1.3-2 3.2-2 2.3 0 4 1.5 4 4.7v6.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-gray-400 text-xs mt-2 text-center">Scroll</p>
      </div>
    </section>
  );
};

export default Hero;
