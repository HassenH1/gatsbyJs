import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Hassen Hassen', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Hassen',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'pic.jpg',
  paragraphOne: 'Hi, my Name is Hassen S. Hassen and I am a software Engineer with a background in customer service. my background in customer service allows me to communicate effectively with both clients and on a team. I am a creative problem solver with a passion for learning and I continually seek better ways to provide clients with innovative solutions.',
  resume: 'UpdatedRes.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'Screenshot.png',
    title: 'Netflix Clone',
    info: 'A netflix clone site where a user can watch all the latest and most popular movie trailers and read/leave comments on each trailer. The site has been deployed on AWS EC2 service.',
    info2: '',
    url: 'http://3.20.221.142/',
    repo: 'https://github.com/HassenH1/trailerflix', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'clothing.PNG',
    title: 'Clothin Store',
    info: 'A simple E-commerce fashion store website developed using MERN stack so Mongodb, Expressjs, Reactjs, Nodejs, and with firebase for user authenication and storage. It has features like Signup, Login, Add to Cart, browing through clothes etc.',
    info2: '',
    url: 'https://gentle-wildwood-37747.herokuapp.com/',
    repo: 'https://github.com/HassenH1/capstone', // if no repo, the button will not show up
  },
  // {
  //   id: uuidv1(),
  //   img: 'adopt1.PNG',
  //   title: 'Adopt Me',
  //   info: 'Its a game for adopting a pet. Use the swipe right feature of you like an animal or use the swipe left if you do not. Think of it as a wingman for Adopting a Pet wherever you are. If you want to adopt a pet you can look through your history off all the liked pets and choose your favorite and get the contact information.',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/HassenH1/Adopt-Me', // if no repo, the button will not show up
  // },
  {
    id: uuidv1(),
    img: 'gamereview.png',
    title: 'Gamer Review',
    info: 'A video game reviews site where users can register and express their opinions on a wide range of titles.',
    info2: '',
    url: 'https://legendary-game-reviews.herokuapp.com/',
    repo: 'https://github.com/HassenH1/project3-react', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'githubfinder.PNG',
    title: 'Github Finder',
    info: 'Github finder is a simple web app that allows someone to search for a Github user and display there most recent repository.',
    info2: '',
    url: 'https://hassenh1.github.io/TheGithubMiniProject/',
    repo: 'https://github.com/HassenH1/TheGithubMiniProject', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'connect4.PNG',
    title: 'Connect 4',
    info: 'If your looking for a simple strategy game that can be played with just about anyone, Legendary Four is for you. Legendary Four is a simple game similar to Tic-Tac-Toe. Only instead of three in a row, the winner must connect four in a row.',
    info2: '',
    url: 'https://hassenh1.github.io/Legendary-4/',
    repo: 'https://github.com/HassenH1/Legendary-4', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'realestate.PNG',
    title: 'Real Estate',
    info: 'Simple website for allowing a user to post there home up for sale or even search for home',
    info2: '',
    url: 'https://obscure-stream-37275.herokuapp.com/',
    repo: 'https://github.com/HassenH1/real-estate', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'tom.PNG',
    title: 'Tamagotchi',
    info: 'Tamagotchi is a virtual pet game that has some buttons which you tap to select and perform activities such as feeding your Tamagotchi, playing, and putting it to sleep. Try to make the Tamagotchi Happy!.',
    info2: '',
    url: 'https://hassenh1.github.io/Tomagotchi/',
    repo: 'https://github.com/HassenH1/Tomagotchi', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'pipboy.PNG',
    title: 'Pipboy from Fallout',
    info: 'The Pip-Boy is a chunky portable computer that character from a video game wears on his or her wrist. It is used to keep track of everything in the game. So this is just a UI version.',
    info2: '',
    url: 'https://hassenh1.github.io/Pipboy-UI-from-Fallout-Bootstrap-/',
    repo: 'https://github.com/HassenH1/Pipboy-UI-from-Fallout-Bootstrap-', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hasansaid51@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hassenhassen/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/HassenH1',
    },
  ],
};