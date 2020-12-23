import { ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import icons from 'theme/icons';
import { TimelineData } from '../components/Timeline/TimelineItem';

const timelineItems: TimelineData[] = [
  {
    date: 'May 2015',
    icon: icons.Briefcase,
    title: 'Software Developer Internship',
    subtitle: ['@ Lone Star Analysis', <br />, 'May 2015 - December 2016'],
    alwaysActive: true,
    activeContent: (
      <UnorderedList>
        <ListItem>
          Assisted in development and maintenance of a suite of software tools including Monte-Carlo
          simulation, and IoT real-time analysis tools.
        </ListItem>
        <ListItem>
          Optimized memory and run-time performance. Achieved +50% improvement for long-running
          I/O-heavy tasks.
        </ListItem>
        <ListItem>Designed and implemented UI and UX components.</ListItem>
        <ListItem>
          Implemented graph theory, sensor fusion, and noise filtering algorithms to expand
          functionality.
        </ListItem>
        <ListItem>Fixed a lot of bugs.</ListItem>
      </UnorderedList>
    ),
  },
  {
    date: 'December 2016',
    icon: icons.School,
    title: 'Graduation from University of Texas at Dallas',
    subtitle: 'Computer Science, Deans list, 3.73GPA',
  },
  {
    date: 'January 2017',
    icon: icons.Briefcase,
    title: 'Hired: Fullstack Software Engineer',
    subtitle: '@ Lone Star Analysis',
  },
  {
    date: 'February 2017',
    icon: icons.Briefcase,
    title: 'Independent Contractor',
    subtitle: 'Gramercy Extremity Orthopedics',
    activeContent: (
      <UnorderedList>
        <ListItem>
          Delivered software to automate several days of manual work down to minutes with simple
          3-button user interface.
        </ListItem>
        <ListItem>
          Designed, implemented, and delivered in 1 month a custom XML-to-CSV mapping tool using
          C#/.NET and WPF.
        </ListItem>
        <ListItem>
          Worked with the client to adhere to government FDA requirements related to orthopedic
          product data.
        </ListItem>
      </UnorderedList>
    ),
  },
  {
    date: 'March 2018',
    icon: icons.Levelup,
    title: 'Promotion: Software Engineer & Team Lead',
    subtitle: '@ Lone Star Analysis',
  },
  {
    date: 'August 2019',
    icon: icons.Rocket,
    title: 'Product Launch: TruPredict',
    subtitle: '@ Lone Star Analysis',
    activeContent: (
      <>
        <Text>
          TruPredict is a powerful price-to-win analysis tool intended for practitioners and
          experienced price-to-win analysts. I served as the lead architect and developer and
          oversaw the project from inception to launch.
        </Text>
        <UnorderedList>
          <ListItem>Built with WPF and C#/.NET Framework</ListItem>
          <ListItem>
            Invented and developed novel simulation algorithms and visualizations to provide
            specific analysis.
          </ListItem>
        </UnorderedList>
      </>
    ),
  },
  {
    date: 'December 2020',
    icon: icons.Rocket,
    title: 'Product Launch: TruPredict Essentials',
    subtitle: '@ Lone Star Analysis',
    activeContent: (
      <>
        <Text>
          TruPredict Essentials enables anyone to perform price-to-win analysis for their business,
          regardless of experience or time constraints.
        </Text>
        <UnorderedList>
          <ListItem>From greenfield to launch in 2 months</ListItem>
          <ListItem>Scrum master and technical lead for team of 4 engineers</ListItem>
          <ListItem>Learned 4 new core technologies - React, Python/Django, Docker, Azure</ListItem>
          <ListItem>
            Leveraged Azure cloud services for efficient and scalable infrastructure.
          </ListItem>
        </UnorderedList>
      </>
    ),
  },
  {
    date: 'Present',
    icon: icons.Briefcase,
    title: 'Software Engineer & Team Lead',
    subtitle: ['@ Lone Star Analysis', <br />, 'January 2017 - Present'],
    alwaysActive: true,
    activeContent: (
      <>
        <Text>
          Lead developer and designer of the TruPredict, a suite of stochastic price-to-win analysis
          tools.
        </Text>
        <UnorderedList>
          <ListItem>
            Lead team of 4 engineers to build company&apos;s first commercial SaaS product - from
            greenfield to launched in 2 months.
          </ListItem>
          <ListItem>
            Designed and implemented system architecture for SaaS product in an Azure ecosystem
            including App Service, Azure B2C and Azure Functions components.
          </ListItem>
          <ListItem>
            Architected and implemented core systems of the TruPredict products including simulation
            engine for Monte-Carlo and novel simulation algorithms, real-time simulation, undo/redo
            capability, and CSV import/export.
          </ListItem>
          <ListItem>
            Invented and developed novel simulation algorithms and visualizations to provide
            meaningful and actionable analysis for users.
          </ListItem>
          <ListItem>Scrum Master for team of 3-6 in an agile environment.</ListItem>
          <ListItem>
            Designed UI/UX to accommodate needs of internal and external customers at all levels of
            expertise.
          </ListItem>
          <ListItem>
            Trained interns to write professional, maintainable and effective code in a team
            environment.
          </ListItem>
        </UnorderedList>
      </>
    ),
  },
];

export default timelineItems;
