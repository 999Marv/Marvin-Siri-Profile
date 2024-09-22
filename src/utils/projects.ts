import { Project } from '../types/project';

export const PROJECTS: Project[] = [
  {
    title: 'HealthSync',
    description: [
      'Developed a large scale app called HealthSync, a community-driven fitness platform enabling Brooklyn residents to create, join, and explore exercise events with features like event filtering, route finding, and real-time updates.',
      'This app included a group of four engineers and had a full agile life cycle method in place',
      'Integrated authentication and authorization using Express.js and PostgreSQL to ensure secure user data management and privacy.',
      'Leveraged Zustand for state management and technologies like React, Socket.io, and Tailwind for responsive and scalable application performance.',
    ],
    links: [
      { url: 'https://github.com/SKMMarcy/HealthSync', text: 'Link to GitHub' },
    ],
    demo: 'https://drive.google.com/file/d/1LvGb24L6OdxFjjoU0yCRUNLBLhygwTU0/view?resourcekey',
  },
  {
    title: 'Leetnotes',
    description: [
      'Constructed LeetNotes, a web application designed to help users efficiently organize and take notes on LeetCode problems.',
      'Implemented secure sign-up and log-in features with authentication and authorization to protect user data privacy.',
      'Employed MaterialUI and React to create dynamic components like search bars and pagination for improved navigation within the LeetCode problem catalog.',
    ],
    links: [
      { url: 'https://github.com/sam-marv/LeetNotes', text: 'Link to GitHub' },
    ],
  },

  {
    title: 'Flux',
    description: [
      'Developed Flux, my first full-stack eCommerce application, utilizing React, HTML, CSS, Vite, Fakestore API, and Postgres.',
      'Created a responsive and user-friendly design, offering features like product listings, a shopping cart, and a functional search bar.',
      'Integrated with the Fakestore API for product data and used Postgres for robust data storage.',
    ],
    links: [
      {
        url: 'https://flux-umber.vercel.app/',
        text: 'Link to deployed site on Vercel',
      },
      { url: 'https://github.com/marv-chu-flux/Flux', text: 'Link to GitHub' },
    ],
  },

  {
    title: 'Waddles and Nibbles Eatery',
    description: [
      'My favorite project ever done!',
      'Developed Waddles & Nibbles Eatery as an immersive gaming adventure using HTML, JavaScript, and the Kaboom.js library, creating a captivating experience for players.',
      "Leveraged Kaboom.js's advanced features, including collision detection and rendering, to enhance gameplay dynamics and ensure a smooth user experience.",
      'Gained expertise in Kaboom.js, which expedited development, allowing for an early launch that was one week ahead of schedule.',
    ],
    links: [
      {
        url: 'https://duck-game.github.io/Waddles-And-Nibbles-Eatery/',
        text: 'Link to deployed game on GitHub',
      },
      {
        url: 'https://github.com/Duck-Game/Waddles-And-Nibbles-Eatery',
        text: 'Link to GitHub',
      },
    ],
  },
];
