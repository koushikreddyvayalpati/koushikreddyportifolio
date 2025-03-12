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
      name: 'Usha sree Peketi',
      position: 'Master Student at SUNY Buffalo',
      img: 'assets/upeketi.png',
      review:
        "Koushik was an excellent collaborator during our master's project. He consistently demonstrated strong problem-solving skills and a deep understanding of the project requirements. His contributions were pivotal in delivering our goals, and he always maintained a positive and professional attitude. It was a pleasure working alongside him.",
    },
    {
      id: 2,
      name: 'Satyanand Singh',
      position: 'Engineering manager at IDFC',
      img: 'satya.jpeg',
      review:
        ' Koushik is a highly skilled developer who played a key role in developing new features for the payments mobile UI at IDFC First Bank. His technical expertise and dedication helped improve user experience. He collaborates effectively with the team and consistently delivers high-quality solutions. A valuable asset to any team, Koushiks contributions have made a lasting impact.'
    },
    {
      id: 3,
      name: 'Kalyan Reddy',
      position: 'Director at Adtycoons ',
      img: 'Kalyanmama.jpg',
      review:"Working with Koushik on our website development was an outstanding experience. He brought exceptional expertise in React.js, turning our vision into a seamless, user-friendly platform. His problem-solving skills, attention to detail, and commitment to delivering high-quality work were truly impressive.",
    },
    {
      id: 4,
      name: 'Mahesh Nayani',
      position: 'CEO of Smart Gig Technologies',
      img: 'maheshnayani.png',
      review:
        'Collaborating with Koushik at Smartgig Technologies was a fantastic experience. He not only grasped our requirements with precision but also delivered a website that surpassed all expectations. His exceptional skills in both frontend and backend development set him apart as a standout professional.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'BUILDING-BLOCK-CHAIN-AND-CRYPTOCURRENCY',
      desc: 'Created a decentralized cryptocurrency solution in object-oriented Python for over 300 active user nodes, executing a proof-of-concept for real-world blockchain applications',
      href: 'https://github.com/koushikreddyvayalpati/BUILDING-BLOCK-CHAIN-AND-CRYPTOCURRENCY',
      spotlight: 'block.png',
    },
    {
      title: 'EFFICENT IMAGE-CAPTIONING',
      desc: 'Developed a model that give captions to the image',
      href: 'https://github.com/koushikreddyvayalpati/Image-captioning-using-VGG-INCEPTIONV3-RESNET-EFFICENT-BO',
      spotlight: 'imagecaption.jpg',
    },
    {
      title: 'ENHANCED-FINGER-PRINT-AUTHENTICATION',
      desc: 'Developed a fingerprint recognition system that compares an input fingerprint with a database and identifies the owner by extracting and storing their minutiae features.',
      href: 'https://github.com/koushikreddyvayalpati/ENHANCED-FINGER-PRINT-AUTHENTICATION',
      spotlight: 'finger.jpg',
    },
    {
      title: 'MENTAL ILLNESS PREDICTION',
      desc: 'Developed a model that predicts patients mentall illness considering various factors',
      href: 'https://github.com/koushikreddyvayalpati/Mental-Illness-Prediction',
      spotlight: '/mental.jpeg',
    },
    {
      title: 'EPASS-GENERATION-FOR-CROSSING-TOLLS',
      desc: 'Developed a QR based toll System',
      href: 'https://github.com/koushikreddyvayalpati/EPASS-GENERATION-FOR-CROSSING-TOLLS',
      spotlight: 'toll.jpg',
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
      name: 'JP Morgan Chase',
      pos: 'Full Stack Developer',
      duration: '2024 - present',
      title: "Developed React.js  web application with TypeScript, Next.js and Node.js, managing over 1000+ Clients.Integrated REST and GraphQL APIs with JWT and OAuth 2.0, enhancing real-time transaction data fetch speed by 20%.Implemented E2E tests with Cypress, Jest, and React Testing Library, reducing production issues by 15+ incidents.",
      icon: '/jpmorgan-chase.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'IDFC FIRST BANK',
      pos: 'Software engineer',
      duration: '2021 - 2023',
      title: " Engineered Loan Recommendation Model with React.js, JavaScript and PyTorch, boosting loan applications by 500.Optimized UPI payment backend with Node.js and SQL indexing, reducing payment processing time by 2 seconds.Tested REST APIs using Postman and Express.js, supporting over 6,000 daily loan transactions.Achieved 100% test coverage through TDD, Agile in JIRA, ensuring faster, high-quality release cycles.",
      icon: '/IDFC.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Smart gig Technologies',
      pos: 'Software Developer',
      duration: '2021 - 2022',
      title: "Built a KPI dashboard with React.js, HTML5, and CSS3, cutting reporting time by 40%.Crafted a high-performance SPA with React and Redux, handling 100K+ daily user interactions.Deployed scalable web apps to the cloud with AWS ECS and AWS Amplify, improving efficiency by 35%. ",
      icon: '/smartgig.png',
      animation: 'salute',
    },
  ];