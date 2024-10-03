import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  git,
  figma,
  vue,
  quasar,
  cila,
  quinstreet,
  saankhya,
  kantlogistics,
  ajitnursinghome,
  mlmnce,
  perforce
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI Designer",
    icon: mobile,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "VueJS",
    icon: vue,
  },
  {
    name: "Quasar",
    icon: quasar,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "perforce",
    icon: perforce,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Member of Technical Staff",
    company_name: "Saankhya Labs",
    icon: saankhya,
    iconBg: "#383E56",
    date: "October 2020 - August 2021",
    points: [
      'Developed modules for signal processing in C and Assembly Language compatible with Saankhya Hardware.',
      'Verification of data on hardware and software simulated models'
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "10X INCUBATOR (Formerly CILA LABS)",
    icon: cila,
    iconBg: "#E6DEDD",
    date: "September 2021 - February 2022",
    points: [
      'Lealzy(A royalty Program) - Worked on developing the platform and fixing pre-existing UI bugs using Quasar',
      'Blooprinted - Consumer (An online course provider aimed at professionals at every industry) -Developed major UI pages and features for pre-production which were responsive and pixel-perfect with Figma designs provided by UX team using Quasar Framework',
      'Blooprinted - Consumer (An online course creation platform for Blooprinted Consumer) -Developed major UI pages and features for pre-production which were responsive and pixel-perfect with Figma designs provided by UX team using Quasar Framework'

    ],
  },
  {
    title: "Software Engineer - UI",
    company_name: "Quinstreet",
    icon: quinstreet,
    iconBg: "#383E56",
    date: "February 2022 - Present",
    points: [
      "Developing Quinstreet Media Platform (QMP) majorly using Vue/Quasar Framework.",
      "Collaborating with cross-functional teams and other developers to create high-quality products.",
      "Actively contributed to code optimizations and performance enhancements, resulting in faster loader times.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];


const projects = [
  {
    name: "Kant Logistics",
    description:
      "Lorem ipsum, dolor sit amet consectetur adtia tenetur cumque blanditiis ipsa, quidem necessitatibus quae repellendus aliquid reiciendis. Recusandae ullam explicabo mollitia suscipit numquam, blanditiis nisi ius",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "quasar",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },

    ],
    image: kantlogistics,
    deployed_link: 'https://www.kantlogistic.com/',
    source_code_link: "https://github.com/foxglove-team/Kant-Logistics",
  },
  {
    name: "Ajit Nursing Home",
    description:
      "Lorem ipsum, dolor sit amet consectetur adtia tenetur cumque blanditiis ipsa, quidem necessitatibus quae repellendus aliquid reiciendis. Recusandae ullam explicabo mollitia suscipit numquam, blanditiis nisi ius",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "quasar",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ajitnursinghome,
    deployed_link: 'https://ajitnursinghome.com/',
    source_code_link: "https://github.com/gayathris99/ajit_nursing_home",
  },
  {
    name: "MES MLMNCE",
    description:
      "Lorem ipsum, dolor sit amet consectetur adtia tenetur cumque blanditiis ipsa, quidem necessitatibus quae repellendus aliquid reiciendis. Recusandae ullam explicabo mollitia suscipit numquam, blanditiis nisi ius",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "quasar",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: mlmnce,
    deployed_link: 'https://mesmlmnce.vercel.app',
    source_code_link: "https://github.com/gayathris99/mlmnce-vue",
  },
];

export { services, technologies, experiences, projects };