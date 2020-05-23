// ====== Type declarations ====== 
export interface project {
    title: string;
    url: string;
    img: string;
    description: string;
    tags: string[];
    [key: string]: any
}

export type Projects =  project[];

// ====== Free Code Camp Projects ====== 

// FCC: Front End Libraries projects
export const FELprojects: Projects = [
  {
    title: 'Drum Machine',
    url: 'https://diegosanchezp.github.io/drum-machine-fcc/',
    img: 'drum-machine-screenshot.png',
    description: 'A drum machine that you can play with your keyboard buttons',
    tags: ['Lit-html', 'Web Components'],
  },
  {
    title: 'Random Quote Machine',
    url: 'https://diegosanchezp.github.io/random-quote-machine',
    img: 'random-quote-machine-screenshot.png',
    description: 'Random Quotes',
    tags: ['ReactJs']
  },
  {
    title: 'React Markdown Previewer',
    url: 'https://diegosanchezp.github.io/simple-react-markdown-previewer',
    img: 'simple-react-markdown-screenshot.png',
    description: 'Live preview markdown editor',
    tags: ['ReactJs']
  },
  {
    title: 'JavaScript Calculator',
    url: 'https://diegosanchezp.github.io/javascript-calculator',
    img: 'javascript-calculator-screenshot.png',
    description: 'A simple, basic calculator',
    tags: ['ReactJs']
  },
  {
    title: 'Pomodoro Tracker',
    url: 'https://diegosanchezp.github.io/pomodoro-timer',
    img: 'pomodo-timer-screenshot.png',
    description: 'Simple Pomodoro Tracker for working',
    tags: ['ReactJs']
  },
];

// FCC: Responsive Web Design projects
export const RWDprojects: Projects = [
  {
    title: '',
    url: '',
    img: '',
    description: '',
    tags: []
  },
]

// ====== Real Life Projects ====== 
export const WorkProjects: Projects = [
  {
    title: 'Copin Pay',
    url: 'http://copinpay.com/',
    img: 'copin-webpage-screenshot.png',
    description: 'A platform for managing your monetary assets from Copin\'s \
    story platform',
    tags: ['Angular8', 'Ionic', 'Firebase'],
  },
]
