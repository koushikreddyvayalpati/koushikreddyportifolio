export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Experience',
      href: '#experience',
    },
    {
      id: 4,
      name: 'Project',
      href: '#project',
    },
    {
      id: 5,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Usha Sree Peketi',
      position: 'Master Student at SUNY Buffalo',
      img: '/assets/upeketi.png',
      review:
        "Koushik was an excellent collaborator during our master's project. He consistently demonstrated strong problem-solving skills and a deep understanding of the project requirements. His contributions were pivotal in delivering our goals, and he always maintained a positive and professional attitude. It was a pleasure working alongside him.",
    },
    {
      id: 2,
      name: 'Satyanand Singh',
      position: 'Engineering manager at IDFC',
      img: '/satya.jpeg',
      review:
        ' Koushik is a highly skilled developer who played a key role in developing new features for the payments mobile UI at IDFC First Bank. His technical expertise and dedication helped improve user experience. He collaborates effectively with the team and consistently delivers high-quality solutions. A valuable asset to any team, Koushiks contributions have made a lasting impact.'
    },
    {
      id: 3,
      name: 'Kalyan Reddy',
      position: 'Director at Adtycoons ',
      img: '/Kalyanmama.jpg',
      review:"Working with Koushik on our website development was an outstanding experience. He brought exceptional expertise in React.js, turning our vision into a seamless, user-friendly platform. His problem-solving skills, attention to detail, and commitment to delivering high-quality work were truly impressive.",
    },
    {
      id: 4,
      name: 'Mahesh Nayani',
      position: 'CEO of Smart Gig Technologies',
      img: '/maheshnayani.png',
      review:
        'Collaborating with Koushik at Smartgig Technologies was a fantastic experience. He not only grasped our requirements with precision but also delivered a website that surpassed all expectations. His exceptional skills in both frontend and backend development set him apart as a standout professional.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'TruStudSel - Student Selection Platform',
      desc: 'A comprehensive TypeScript-based platform for student selection and management, featuring modern web technologies and user-friendly interfaces for educational institutions.',
      href: 'https://tru-stud-sel-website.vercel.app/',
      spotlight: '/truustudsel.png',
      tech: ['TypeScript', 'React', 'Node.js'],
      category: 'Full-Stack'
    },
    {
      title: 'TruStudSel Backend - Java Enterprise',
      desc: 'Enterprise-grade Java backend system providing robust APIs and business logic for the student selection platform with Spring Boot and microservices architecture.',
      href: 'https://github.com/koushikreddyvayalpati/TruStudSelBackend',
      spotlight: '/edu.png',
      tech: ['Java', 'Spring Boot', 'REST APIs'],
      category: 'Backend'
    },
    {
      title: 'SchooloGPT Backend - Go Microservice',
      desc: 'High-performance Go backend service leveraging modern microservices patterns and AI integration for educational technology solutions.',
      href: 'https://github.com/koushikreddyvayalpati/schoologptbackend',
      spotlight: '/schoolgpt.png',
      tech: ['Go', 'Microservices', 'AI Integration'],
      category: 'Backend'
    },
    {
      title: 'LinqCRM - Customer Relationship Management',
      desc: 'Modern CRM solution built with HTML5 and advanced web technologies, providing comprehensive customer management and analytics capabilities.',
      href: 'https://github.com/koushikreddyvayalpati/LinqCRMKoushik',
      spotlight: '/vitlogo1.png',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Web Application'
    },
    
    {
      title: 'MENTAL ILLNESS PREDICTION',
      desc: 'Machine learning model that predicts mental illness patterns using advanced algorithms and data analysis techniques for healthcare applications.',
      href: 'https://github.com/koushikreddyvayalpati/Mental-Illness-Prediction',
      spotlight: '/mental.jpeg',
      tech: ['Python', 'Machine Learning', 'Data Science'],
      category: 'AI/ML'
    },
    {
      title: 'ENHANCED FINGERPRINT AUTHENTICATION',
      desc: 'Advanced biometric authentication system using fingerprint recognition with minutiae extraction and secure database storage for identity verification.',
      href: 'https://github.com/koushikreddyvayalpati/ENHANCED-FINGER-PRINT-AUTHENTICATION',
      spotlight: '/finger.jpg',
      tech: ['Python', 'Computer Vision', 'Security'],
      category: 'Security'
    },
    {
      title: 'BUILDING BLOCKCHAIN AND CRYPTOCURRENCY',
      desc: 'Decentralized cryptocurrency solution built with object-oriented Python, supporting over 300 active user nodes and real-world blockchain applications.',
      href: 'https://github.com/koushikreddyvayalpati/BUILDING-BLOCK-CHAIN-AND-CRYPTOCURRENCY',
      spotlight: '/block.png',
      tech: ['Python', 'Blockchain', 'Cryptography'],
      category: 'Blockchain'
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'IDFC FIRST BANK',
      pos: 'Application Engineer',
      duration: '2022 - 2023',
      title: "Architected and developed pixel-perfect UIs for iOS and Android platforms using React Native, enhancing user experience by 10%.Led the transition of web applications to React Native, achieving a 40% increase in cross-platform efficiency",
      icon: '/IDFC.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'IDFC FIRST BANK',
      pos: 'Web Developer',
      duration: '2022 - 2022',
      title: "Engineered a Robo Advisor application using React.js and Flask, integrating machine learning algorithms to improve data analysis efficiency by 30% and decision-making accuracy by 25%",
      icon: '/IDFC.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Smart gig Technologies',
      pos: 'Junior Ui Developer',
      duration: '2021 - 2022',
      title: "Built responsive and user-friendly interfaces for KPI reporting tools using React.js, reducing manual processing time by 40% through optimized design .Enhanced data accuracy and user efficiency by identifying UX bottlenecks and implementing streamlined React components, cutting task completion time by 30% ",
      icon: '/smartgig.png',
      animation: 'salute',
    },
  ];