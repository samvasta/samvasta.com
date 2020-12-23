interface Skill {
  name: string;
  description?: any;
}

interface SkillGroup {
  name: string;
  skills: Skill[];
}

const skillList: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
      {
        name: 'C#/.NET core',
        description: `I have been using C# to develop and maintain enterprise applications for my entire career. I have used
          C# personally to creat many smaller projects including a command-line budgeting tool.`,
      },
      {
        name: 'Java',
        description: `I learned Java as my first OOP language in highschool. I have since used it personally to create video games,
           procedural image generators, and professionally for enterprise IoT software.`,
      },
      {
        name: 'JavaScript/TypeScript',
        description: `I wrote this website using Typescript! I also use Javascript and Typescript professionally to develop and
          maintain SaaS products.`,
      },
      {
        name: 'Python',
        description: 'I learned python while developing the backend of a SaaS product.',
      },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      {
        name: 'React',
        description:
          'This website is written with React at the core. I also use React professionally to develop and maintain SaaS products.',
      },
      {
        name: 'CSS',
        description:
          "I can't claim to have mastered CSS, but I have mastered browsing StackOverflow to solve my CSS problems.",
      },
      {
        name: 'HTML',
        description: "Who isn't an HTML master at this point?",
      },
      {
        name: 'WPF & Winforms',
        description: `As an intern at Lone Star Analysis, I helped maintain and develop a mature Winforms application.
           As a full-time employee a few years later, I lead development for an enterprise application using WPF.`,
      },
      {
        name: 'Bootstrap',
        description:
          'I teamed up with another developer to create a fully featured real-time IoT product demo using bootstrap and vanilla JS in under 1 month.',
      },
      {
        name: 'Chakra-UI',
        description: 'This website uses Chakra!',
      },
    ],
  },
  {
    name: 'Backend',
    skills: [
      {
        name: 'Django',
        description: '',
      },
      {
        name: 'ExpressJs',
        description: '',
      },
      {
        name: 'ASP.NET',
        description: '',
      },
      {
        name: 'Entity Framework',
        description: '',
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Docker',
        description: '',
      },
      {
        name: 'Azure',
        description: '',
      },
      {
        name: 'Google Cloud Platform',
        description: '',
      },
    ],
  },
  {
    name: 'Tools & Environments',
    skills: [
      {
        name: 'Windows/Mac/Linux',
      },
      {
        name: 'Visual Studio',
        description: '',
      },
      {
        name: 'Jetbrains Suite',
        description: '',
      },
      {
        name: 'git',
        description: '',
      },
      {
        name: 'hg (mercurial)',
        description: '',
      },
      {
        name: 'Github',
        description: '',
      },
      {
        name: 'Atlassian Suite',
        description: '',
      },
    ],
  },
  {
    name: 'The Rest of the Soup',
    skills: [
      {
        name: 'SQL',
        description: '',
      },
      {
        name: 'Rapid Prototyping',
        description: '',
      },
      {
        name: 'Scrum',
        description: '',
      },
      {
        name: 'Graphic Design',
        description: '',
      },
      {
        name: 'Statistics & Math',
        description: 'I also solve geometry problems for fun.',
      },
      {
        name: 'CAD',
        description: '',
      },
      {
        name: 'XML',
        description: "Who hasn't mastered XML at this point?",
      },
      {
        name: 'Markdown',
        description: 'I have written my fair share of documentation.',
      },
    ],
  },
  {
    name: 'Still Mastering',
    skills: [
      {
        name: 'SCSS/SASS',
      },
      {
        name: 'GraphQL',
      },
      {
        name: 'C/C++',
        description: 'I have written firmware for my many keyboards using C and C++.',
      },
    ],
  },
];

export { Skill, SkillGroup, skillList };
