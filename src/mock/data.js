import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kaleb Ugalde | Programmer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kaleb Ugalde',
  subtitle: 'I just like to program',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'selfie.jpg',
  paragraphOne:
    'I am a self-taught programmer. I have experience programming in the fields of web development, robotics, machine learning, and computer vision.',
  paragraphTwo: 'I mentored local robotics team and have tutored students about computer science.',
  paragraphThree: 'My goals are to help improve the lives of others through technology.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'FrenchBlog.png',
    title: 'French Blog',
    info: 'A blog created for my classmates to post their assignments',
    info2: 'Created using reactjs, mongodb, and nodejs',
    url: 'https://french-blog.herokuapp.com/',
    repo: 'https://github.com/Dael-the-Mailman/french-blog', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to contact me? Hit the button below!',
  btn: '',
  email: 'kalebugalde@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Dael-the-Mailman',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
