import React from 'react'
import StackIcon from "tech-stack-icons";
const About = () => {
  return (
    <section className='c-space my-20' id="about">
       <div className="grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="dslr1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Koushik reddy</p>
              <p className="grid-subtext">
              Experienced Application Engineer with expertise in React Native, React.js, and backend technologies,
               delivering high-performance, user-centric applications. 
               Successfully optimized development cycles, reduced system bugs by 50%, and improved cross-platform efficiency by 40%.
                Proven track record in developing scalable solutions, enhancing user engagement, and driving technical excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="skills.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              {/* <p className="grid-subtext">
              I specialize in React Native, React.js, and backend frameworks like Flask and Spring Boot to build scalable, high-performance applications. Proficient in integrating REST APIs,
               optimizing cross-platform development, and ensuring system stability. Experienced in leveraging databases like MySQL and MongoDB to handle complex data structures efficiently.
               Skilled in tools like Docker, AWS Cloud, and GitHub for streamlined development and deployment.
              </p> */}
              <div className="grid grid-cols-5 gap-3 mt-5">
                <StackIcon name="reactjs" className="text-blue-500 w-12 h-12" />
                <StackIcon name="python" className="text-yellow-500 w-12 h-12" />
                <StackIcon name="git" className="text-yellow-500 w-12 h-12" />
                <StackIcon name="js" className="text-yellow-500 w-12 h-12" />
                <StackIcon name="postgresql" className="text-blue-500 w-12 h-12" />
                <StackIcon name="css3"className="text-blue-500 w-12 h-12" />
                <StackIcon name="django" className="text-blue-500 w-12 h-12"  />
                <StackIcon name="html5" className="text-blue-500 w-12 h-12" />
                <StackIcon name="java" className="text-blue-500 w-12 h-12" />
                <StackIcon name="postman" className="text-blue-500 w-12 h-12" />
                <StackIcon name="spring" className="text-blue-500 w-12 h-12" />
                <StackIcon name="typescript" className="text-blue-500 w-12 h-12"/>
                <StackIcon name="vitejs" className="text-blue-500 w-12 h-12" />
                <StackIcon name="docker" className="text-blue-500 w-12 h-12"/>
                <StackIcon name="grafana" className="text-blue-500 w-12 h-12"/>
                <StackIcon name="jira" className="text-blue-500 w-12 h-12" />
                <StackIcon name="aws" className="text-blue-500 w-12 h-12"/>
                <StackIcon name="homebrew" className="text-blue-500 w-12 h-12"/>
                <StackIcon name="mongodb" className="text-blue-500 w-12 h-12" />
                <img src="android.png" alt="React" className="w-12 h-12 object-contain" />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-3">
  <div className="grid-container">
    <img src="/edu1.png" alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain" />
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
          <img src="/vitlogo1.png" alt="VIT University" className="w-14 h-14 object-contain" />
          <div>
            <p className="font-semibold  text-white text-sm">VIT University</p>
            <p className="text-sm text-gray-400">Bachelor’s in Computer Science and Engineering</p>
            <p className="text-xs text-gray-300">June 2018 - July 2022</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>

    </section>
  )
}

export default About