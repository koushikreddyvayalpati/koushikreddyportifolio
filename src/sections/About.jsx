import React, { useEffect } from 'react';
import StackIcon from "tech-stack-icons";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration for animation speed
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <p className=" grid-headtext text-2xl text-white-700 py-3">My Self</p>
      <div className="grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3" data-aos="fade-up">
          <div className="grid-container">
            <img src="koushik2.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain transition-transform transform hover:scale-105 rounded-md" />
            <div>
              <p className="grid-headtext">Hi, I’m Koushik reddy</p>
              <p className="grid-subtext">
              Full Stack Engineer with 3+ years of experience building scalable web applications using MongoDB, React.js, Node.js, and Express.js in Agile environments. Proficient in front-end and mobile app development (React Native, TypeScript, JavaScript) with strong back-end expertise. Skilled in designing scalable, resilient systems to solve complex challenges and deliver exceptional customer experiences. Experienced in mentoring, code reviews, and collaborating in cross-functional teams.
            </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3" data-aos="fade-up" data-aos-delay="200">
          <div className="grid-container">
            <img src="skills.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain transition-transform transform hover:scale-105" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <div className="grid grid-cols-5 gap-3 mt-5">
                <StackIcon name="reactjs" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="python" className="text-yellow-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="git" className="text-yellow-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="js" className="text-yellow-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="postgresql" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="css3" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="redis" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="html5" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="java" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="postman" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="spring" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="typescript" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="vitejs" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="docker" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="grafana" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="jira" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="aws" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="homebrew" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="mongodb" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="nodejs" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="nextjs2" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="graphql" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="redux" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />
                <StackIcon name="tailwindcss" className="text-blue-500 w-12 h-12 transition-transform transform hover:scale-125" />






                <img src="android.png" alt="React" className="w-12 h-12 object-contain transition-transform transform hover:scale-125" />
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-3" data-aos="fade-up" data-aos-delay="400">
          <div className="grid-container">
            <img src="/edu1.png" alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain transition-transform transform hover:scale-105" />
            <div>
              <p className="grid-headtext">Education</p>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-14 mt-5">
                <div className="flex items-center gap-6">
                  <img src="suny.png" alt="SUNY Buffalo" className="w-12 h-12 object-contain" />
                  <div>
                    <p className="font-semibold text-white text-sm">SUNY Buffalo</p>
                    <p className="text-sm text-gray-400">Master’s in Computer Science and Engineering</p>
                    <p className="text-xs text-gray-300">Aug 2023 - Dec 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <img src="/edu.png" alt="VIT University" className="w-12 h-12 object-contain" />
                  <div>
                    <p className="font-semibold text-white text-sm">React With Redux</p>
                    <p className="text-sm text-gray-400">React - The Complete Guide 2025 (incl. Next.js, Redux)</p>
                    <p className="text-xs text-gray-300">Feb 2025</p>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
