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
        description:
          'I have been using C# to develop and maintain enterprise applications for my entire career. I have used' +
          'C# personally to create many smaller projects including a command-line budgeting tool.',
      },
      {
        name: 'Java',
        description:
          'Java was the first OOP language I learned in highschool. I have since used it personally to create video games,' +
          'procedural image generators, and professionally for enterprise IoT software.',
      },
      {
        name: 'JavaScript/TypeScript',
        description:
          'I wrote this website using Typescript! I also use Javascript and Typescript professionally to develop and' +
          'maintain SaaS products. I primarily use it on the frontend (React), but this website also uses TypeScript on the backend (Express).',
      },
      {
        name: 'Python',
        description:
          'I learned python while developing the backend of a SaaS product. I think it is an excellent fit to build REST APIs' +
          'because of the repetitive nature of REST servers. We relied on Django and Django REST Framework.',
      },
    ],
  },
  {
    name: 'Frontend Frameworks & Libraries',
    skills: [
      {
        name: 'React',
        description:
          'This website is written with React at the core. I also use React professionally to develop and maintain SaaS products.',
      },
      {
        name: 'WPF & Winforms',
        description:
          'As an intern at Lone Star Analysis, I helped maintain and develop a mature Winforms application.' +
          'As a full-time employee a few years later, I lead development for an enterprise application using WPF. I have dug into' +
          'the internals of WPF and have written many custom controls and behaviors.',
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
    name: 'Backend Frameworks & Libraries',
    skills: [
      {
        name: 'Django',
        description:
          'I choose to use django professionally to support UI-heavy applications because of' +
          'the familiarity of python and the speed that django allows developers to build standard CRUD features.',
      },
      {
        name: 'Django REST Framework',
        description: 'I use DRF professionally to support several products.',
      },
      {
        name: 'ExpressJs',
        description: 'This website uses express as its backend.',
      },
      {
        name: 'ASP.NET',
        description: '',
      },
      {
        name: 'Entity Framework',
        description:
          'EF is the go-to ORM for .NET developers. I have even jumped into the rabbit hole of ' +
          "creating and modifying T4 files to leverage EF's code generation to reduce redundant hand-written code.",
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Docker',
        description:
          'Docker has been pivotal in adopting the 12 Factor App methodology. ' +
          'I have become comfortable navigating docker and docker-compose workflows, and seen ' +
          'how it effects productivity when developing, testing, and deploying code.',
      },
      {
        name: 'Azure',
        description:
          "In professional projects I have experience with Azure's App Service, Functions, B2C, " +
          'KeyVault, Blob Storage/Storage Account and other services.',
      },
      {
        name: 'Google Cloud Platform',
        description:
          'This website is hosted on App Engine, and also uses Cloud Functions, Cloud Storage, ' +
          'and the Cloud Scheduler services.',
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
        description:
          'Visual Studio is my preferred IDE for developing WPF applications. VS Code is excellent for everything else.',
      },
      {
        name: 'Jetbrains Suite',
        description: 'My preferred IDEs for writing Java, Python, and .NET Core applications.',
      },
      {
        name: 'git',
      },
      {
        name: 'hg (mercurial)',
      },
      {
        name: 'Github',
      },
      {
        name: 'Atlassian Suite',
        description:
          'JIRA for tracking bugs & stories, Bitbucket for source control, Confluence for documentation',
      },
    ],
  },
  {
    name: 'The Rest of the Soup',
    skills: [
      {
        name: 'SQL',
        description:
          'I have extensive experience designing schemas and writing queries, as well as interfacing with ORMs like Entity Framework, in both personal and professional projects.',
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
        name: 'XML',
        description: "Who hasn't mastered XML at this point?",
      },
      {
        name: 'Rapid Prototyping',
        description:
          'I have learned through experience that good ideas should be captured quickly to test the concept before the excitement expires.' +
          'I know which corners to cut and where to take on technical debt to quickly achieve a proof-of-concept while also setting up the project to' +
          'transition to an MVP and beyond.',
      },
      {
        name: 'Scrum',
        description:
          'I have served as the Scrum Master for teams of 3-6 and am working towards certification.',
      },
      {
        name: 'Graphic Design',
        description:
          'I have studied the concepts of art and graphic design throughout grade school and college with a special interest in color' +
          'theory. I am probably not as skilled as a full-time designer but I like to think I can hold my own.',
      },
      {
        name: 'Statistics & Math',
        description:
          'Working at Lone Star Analysis, I embraced statistics and learned how to apply stochastic concepts in' +
          'programming and data science. I also solve geometry problems for fun.',
      },
      {
        name: 'CAD',
        description:
          'From various hobby projects over the years I have learned my way round Autodesk Inventor, Fusion 360, LibreCAD and Kicad.',
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
        description: 'I have written firmware for my keyboards using C and C++.',
      },
    ],
  },
];

export { Skill, SkillGroup, skillList };
