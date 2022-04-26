const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.blajsa.com',
  title: '[ghost-development]',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: '[Timothy Blajsa]',
  role: '[Web Developer and Artist] from [Berkeley Heights, NJ]',
  description:
    'An artist and front-end developer with experience leveraging industry tools such as HTML, CCSS, and Javascript, in addition to design based softwares such as Adobe XD, Figma, Wix, and Google Sites. Managing projects in an organized manner, I have worked both individually and cooperatively to produce multiple sites, web apps, and projects.',
  resume: 'https://docs.google.com/document/d/1JQQoNmri33yRk_z-k8qczNfmsuHq--mSs6kNHzy4iDg/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/timothy-blajsa-118795196',
    github: 'https://github.com/TimothyBlajsa',
    twitter: 'https://twitter.com/somanypolygons',
  },
}

const hero = {
  name: 'Skull Image',
  src: 'images/skull.png',
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Planetarium Interactive Display',
    imageSrc: './images/logo192.png',
    description:
      'An interactive presentation of the science of Blackholes.',
    stack: ['HTML', 'CSS', 'PixiJS'],
    sourceCode: 'https://github.com/RVCC-IDMX/291-FALL2021-Team-Black-Hole',
    livePreview: 'http://blackhole-proto.netlify.app',
  },
  {
    name: 'Aesthetic Roshambo',
    imageSrc: './images/moon.png',
    description:
      'An aesthetic version of the classic game of Rock Paper Scissors.',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/RVCC-IDMX/rock-paper-scissors-TimothyBlajsa',
    livePreview: 'http://blajsa-roshambo.netlify.app',
  },
  {
    name: 'Polaroid',
    description:
      'A simple image generator powered by Unsplash.',
    stack: ['HTML', 'CSS', 'React'],
    sourceCode: 'https://github.com/TimothyBlajsa/unsplashGenerator',
    livePreview: 'http://quick-polaroid.netlify.app',
  },
  {
    name: 'Lofi Notes',
    description:
      'An aesthetic, dark-mode and minimalist notes app that takes advantage of local storage.',
    stack: ['HTML', 'CSS', 'React'],
    sourceCode: 'https://github.com/TimothyBlajsa/notes-app-javascript-localstorage',
    livePreview: 'http://lofi-notes.netlify.app',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'SASS',
  'Material UI',
  'Git',
  'Wix',
  'Google Sites',
  'Figma',
  'Adobe XD',
]

const IMAGES = [
  {
    url: 'images/crow.jpeg',
    title: 'Crow',
    thumbUrl: 'images/crow.jpeg'
  },
  {
    url: 'images/scapes.jpeg',
    title: 'Scapes',
    thumbUrl: 'images/scapes.jpeg'
  },
  {
    url: 'images/drown.jpeg',
    title: 'Drowning',
    thumbUrl: 'images/drown.jpeg'
  },
  {
    url: 'images/vulture.jpeg',
    title: 'Bird of Prey',
    thumbUrl: 'images/vulture.jpeg'
  },
  {
    url: 'images/sunflower.JPG',
    title: 'Sunny',
    thumbUrl: 'images/sunflower.JPG'
  },
  {
    url: 'images/cry.jpg',
    title: 'Cry',
    thumbUrl: 'images/cry.jpg'
  },
  {
    url: 'images/koi.JPG',
    title: 'Koi',
    thumbUrl: 'images/koi.JPG'
  },
  {
    url: 'images/new_world_economy.JPG',
    title: 'Crypto',
    thumbUrl: 'images/new_world_economy.JPG'
  },
  {
    url: 'images/work_at_home.JPG',
    title: 'Lofi',
    thumbUrl: 'images/work_at_home.JPG'
  }
  
]

const newImages = [
  {
    src: 'images/crow.jpeg',
    thumbnail: 'images/crow.jpeg',
    thumbnailWidth: 320,
    thumbnailHeight: 174
  },
  {
    src: 'images/scapes.jpeg',
    thumbnail: 'images/scapes.jpeg',
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: 'images/drown.jpeg',
    thumbnail: 'images/drown.jpeg',
    thumbnailWidth: 320,
    thumbnailHeight: 212
  }
]

const education = {
    date: '[2018]-[2022]',
    school: 'Raritan Valley Community College',
    major: 'A.S. Interactive Design and Web Development',
    achievements: [
      '3.8+ gpa',
      'Phi Theta Kappa Honors Society',
      'The National Society of Leadership and Success',
      'Alpha Beta Gamma International Business Society',
      'Student Representative of Philosophy Club',
      'Writer/Photographer for The Record Paper',
      'Mentorship 2019-2020',
    ]
  }
  
  const clients = [
    'Sports Minded Unlimited',
    'Raritan Valley Community College',
  ]

  const work = {
    date: '[Nov 2020]-[Dec 2020]',
    client: 'Sports Minded Unlimited',
    role: 'Lead Web Developer and Designer',
    link: 'https://sportsmindedunlimited.com',
  }

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'timothyblajsa@gmail.com',
  phone: '908-376-9813',
}

export { header, about, projects, skills, contact, education, clients, work, IMAGES, hero, newImages }
