export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'Experience',
      href: '#experience',
    },
    {
      id: 3,
      name: 'Project',
      href: '#project',
    },
    {
      id: 4,
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
        'Working with Koushik was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Raunak Thapliyal',
      position: 'Application Engineer at IDFC',
      img: 'raunak.png',
      review:
        'Koushik’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
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
        'Collaborating with Koushik at Smargig Technologies was a fantastic experience. He not only grasped our requirements with precision but also delivered a website that surpassed all expectations. His exceptional skills in both frontend and backend development set him apart as a standout professional.',
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