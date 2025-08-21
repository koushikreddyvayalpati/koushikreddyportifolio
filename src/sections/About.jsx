import { useEffect } from 'react';
import StackIcon from "tech-stack-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions and driving technological excellence
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column - Profile & Bio */}
          <div className="space-y-8" data-aos="fade-right">
            
            {/* Profile Card */}
            <div className="professional-card relative">
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="relative">
                  <img 
                    src="/dslr1.png" 
                    alt="Koushik Reddy" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Vayalpati Koushik Reddy</h3>
                  <p className="text-blue-400 font-semibold mb-3">Application Engineer & Full-Stack Developer</p>
                  <div className="status-badge">
                    <div className="status-online"></div>
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="professional-card">
              <h4 className="text-xl font-semibold text-white mb-4">Professional Summary</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Experienced Application Engineer with expertise in React Native, React.js, and modern backend technologies. 
                Specialized in delivering high-performance, user-centric applications that drive business growth.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <div className="text-xl font-bold text-green-400">50%</div>
                  <div className="text-xs text-gray-400">Bug Reduction</div>
                </div>
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <div className="text-xl font-bold text-blue-400">40%</div>
                  <div className="text-xs text-gray-400">Efficiency Boost</div>
                </div>
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <div className="text-xl font-bold text-purple-400">300+</div>
                  <div className="text-xs text-gray-400">Active Users</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="space-y-8" data-aos="fade-left">
            
            {/* Education */}
            <div className="professional-card">
              <h4 className="text-xl font-semibold text-white mb-6">Education</h4>
              <div className="space-y-6">
                
                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
                  <img src="/suny.png" alt="SUNY Buffalo" className="w-16 h-16 object-contain rounded-lg bg-white/10 p-2" />
                  <div className="flex-1">
                    <h5 className="font-semibold text-white">State University of New York at Buffalo</h5>
                    <p className="text-blue-400 text-sm">Master of Science in Computer Science</p>
                    <p className="text-gray-400 text-xs">Aug 2023 - Dec 2024</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-300">GPA</div>
                    <div className="text-green-400 font-bold">3.8</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
                  <img src="/vitlogo1.png" alt="VIT University" className="w-16 h-16 object-contain rounded-lg bg-white/10 p-2" />
                  <div className="flex-1">
                    <h5 className="font-semibold text-white">VIT University</h5>
                    <p className="text-blue-400 text-sm">Bachelor of Technology in Computer Science</p>
                    <p className="text-gray-400 text-xs">June 2018 - July 2022</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-300">CGPA</div>
                    <div className="text-green-400 font-bold">8.7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Skills */}
            <div className="professional-card">
              <h4 className="text-xl font-semibold text-white mb-6">Core Competencies</h4>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-3">
                   <h5 className="text-blue-400 font-medium">Frontend & Mobile</h5>
                   <div className="flex flex-wrap gap-2">
                     <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React.js</span>
                     <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React Native</span>
                     <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TypeScript</span>
                     <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Next.js</span>
                   </div>
                 </div>
                 <div className="space-y-3">
                   <h5 className="text-green-400 font-medium">Backend & Databases</h5>
                   <div className="flex flex-wrap gap-2">
                     <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Python</span>
                     <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Go</span>
                     <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Django</span>
                     <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">PostgreSQL</span>
                   </div>
                 </div>
                 <div className="space-y-3">
                   <h5 className="text-purple-400 font-medium">Enterprise Frameworks</h5>
                   <div className="flex flex-wrap gap-2">
                     <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Spring Boot</span>
                     <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">FastAPI</span>
                     <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Gin (Go)</span>
                     <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Express.js</span>
                   </div>
                 </div>
                 <div className="space-y-3">
                   <h5 className="text-yellow-400 font-medium">DevOps & Cloud</h5>
                   <div className="flex flex-wrap gap-2">
                     <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Docker</span>
                     <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Kubernetes</span>
                     <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">AWS</span>
                     <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">CI/CD</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="professional-card" data-aos="fade-up">
          <h4 className="text-xl font-semibold text-white mb-6 text-center">Technology Stack</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 justify-items-center">
            <div className="tech-icon-wrapper">
              <StackIcon name="reactjs" className="tech-icon w-12 h-12 text-blue-400" />
              <span className="tech-label">React</span>
            </div>
            <div className="tech-icon-wrapper">
              <StackIcon name="python" className="tech-icon w-12 h-12 text-yellow-400" />
              <span className="tech-label">Python</span>
            </div>
            <div className="tech-icon-wrapper">
              <StackIcon name="go" className="tech-icon w-12 h-12 text-cyan-400" />
              <span className="tech-label">Go</span>
            </div>
            <div className="tech-icon-wrapper">
              <StackIcon name="typescript" className="tech-icon w-12 h-12 text-blue-500" />
              <span className="tech-label">TypeScript</span>
            </div>
            <div className="tech-icon-wrapper">
              <StackIcon name="nextjs" className="tech-icon w-12 h-12 text-white" />
              <span className="tech-label">Next.js</span>
            </div>
            <div className="tech-icon-wrapper">
              <StackIcon name="postgresql" className="tech-icon w-12 h-12 text-blue-600" />
              <span className="tech-label">PostgreSQL</span>
            </div>
            <div className="tech-icon-wrapper">
              <StackIcon name="django" className="tech-icon w-12 h-12 text-green-600" />
              <span className="tech-label">Django</span>
            </div>
            <div className="tech-icon-wrapper">
              <StackIcon name="spring" className="tech-icon w-12 h-12 text-green-500" />
              <span className="tech-label">Spring</span>
            </div>
            <div className="tech-icon-wrapper">
              <StackIcon name="docker" className="tech-icon w-12 h-12 text-blue-400" />
              <span className="tech-label">Docker</span>
            </div>
            <div className="tech-icon-wrapper">
              <StackIcon name="kubernetes" className="tech-icon w-12 h-12 text-blue-500" />
              <span className="tech-label">Kubernetes</span>
            </div>
            <div className="tech-icon-wrapper">
              <StackIcon name="aws" className="tech-icon w-12 h-12 text-orange-400" />
              <span className="tech-label">AWS</span>
            </div>
            <div className="tech-icon-wrapper">
              <StackIcon name="git" className="tech-icon w-12 h-12 text-red-500" />
              <span className="tech-label">Git</span>
            </div>
            <div className="tech-icon-wrapper">
              <StackIcon name="mongodb" className="tech-icon w-12 h-12 text-green-500" />
              <span className="tech-label">MongoDB</span>
            </div>
            <div className="tech-icon-wrapper">
              <StackIcon name="redis" className="tech-icon w-12 h-12 text-red-400" />
              <span className="tech-label">Redis</span>
            </div>
            <div className="tech-icon-wrapper">
              <StackIcon name="grafana" className="tech-icon w-12 h-12 text-orange-500" />
              <span className="tech-label">Grafana</span>
            </div>
            <div className="tech-icon-wrapper">
              <img src="/android.png" alt="Android" className="tech-icon w-12 h-12 object-contain" />
              <span className="tech-label">Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
