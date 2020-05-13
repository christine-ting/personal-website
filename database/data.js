const portfolioData = {
  name: 'CHRISTINE TING',
  role: 'SOFTWARE ENGINEER',
  about: 'Hello! I\'m Christine, a full-stack software engineer based in Los Angeles, California.\nI have serious passion for software design and development, and enjoy creating for both web and mobile devices. Also, I love working in a team, with all of us building and learning together toward a common vision.\nFeel free to reach out to me on social media or send me an email. I\'d love to talk about anything from work to life.',
  applications: [
    {
      name: 'Personal Trainer Finder',
      image: 'https://ct-my-website.s3-us-west-1.amazonaws.com/Screen+Shot+2020-05-05+at+5.52.11+PM.png',
      description: 'Local gym finder mobile application displaying list of personal trainers with customizable profile page and fitness plans.',
      technologies: ['React-Native', 'React Hooks', 'Node.js', 'Express', 'PostgreSQL/Sequelize', 'GraphQL', 'Firebase', 'Google Places API'],
      repo: 'https://github.com/christine-ting/trainer-finder-app',
      url: ''
    },
    {
      name: 'REI Product Page Recreation',
      image: 'https://ct-my-website.s3-us-west-1.amazonaws.com/Screen+Shot+2020-05-13+at+12.19.18+PM.png',
      description: 'Full simulation of REI (Recreational Equipment, Inc.) product detail page with Service Oriented Architecture (SOA).',
      technologies: ['React', 'Node.js', 'Express', 'Mongo', 'Mongoose'],
      repo: 'https://github.com/hrla34-Syntax-Terror',
      url: 'http://3.101.41.182:8000/'
    }
  ],
  contact: 'Drop me an e-mail at christineting.an@gmail.com or simply fill out the form below and I will reply to you soon!'
};

const resumeData = {
  education: [
    {
      college: 'University of California, Berkeley',
      place: 'Berkeley, CA/US',
      degree: 'Bachelor of Arts in Double Major: Applied Mathematics and Economics',
      time: 'August 2011–May 2015'
    },
    {
      college: 'London School of Economics and Political Science',
      place: 'London, England/UK',
      degree: 'Study Abroad, University of California Education Abroad Program',
      time: 'Summer 2014'
    }
  ],
  skills: [
    {
      category: 'Front End',
      technologies: ['JavaScript (ES5 and ES6)', 'HTML5', 'CSS3', 'React', 'React Hooks', 'React-Native', 'Redux', 'jQuery', 'D3', 'Axios', 'Ajax']
    },
    {
      category: 'Back End',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'MySQL', 'PostgreSQL', 'Sequelize', 'RESTful API Development', 'GraphQL', 'Firebase']
    },
    {
      category: 'Testing/Deployment',
      technologies: ['Mocha', 'Chai', 'Jest', 'Artillery', 'Loader.io', 'Amazon EC2', 'Amazon S3']
    },
    {
      category: 'Developer Tools',
      technologies: ['Git', 'npm', 'Webpack', 'Babel', 'Agile Methodology', 'TDD', 'Nginx']
    },
    {
      category: 'Graphic Design',
      technologies: ['Adobe Photoshop', 'Illustrator']
    }
  ],
  applications: [
    {
      name: 'Personal Trainer Finder',
      technologies: ['React-Native', 'React Hooks', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'GraphQL', 'Firebase', 'Google Places API'],
      description: 'Local gym finder mobile application displaying list of personal trainers with customizable profile page and fitness plans.',
      details: [
        'Developed authentication process by utilizing user flow with React Navigation and Firebase.',
        'Configured Amazon S3 bucket and built S3 API calls to enable profile picture and cover photo upload functionalities.',
        'Simplified data querying process by reducing the number of endpoints and defining query schema using GraphQL.'
      ]
    },
    {
      name: 'Trafalgar System Design Project',
      technologies: ['React', 'Node.js', 'Express', 'Mongo', 'Mongoose', 'PostgreSQL', 'Sequelize', 'AWS EC2'],
      description: 'Back End optimization of a reproduced Trafalgar.com web page with stress test conduction and horizontal scaling.',
      details: [
        'Executed drain event in Node to successfully seed 10 million records to database for stress testing using Artillery.',
        'Benchmarked PostgreSQL and Mongo systems to achieve minimal query times via indexing.',
        'Increased throughput from 1.2K to 9K RPS with a latency of 62ms and error rate of 0% by scaling out to three EC2 instances along with caching and load balancing with Nginx.'
      ]
    },
    {
      name: 'REI Product Page Recreation',
      technologies: ['React', 'Node.js', 'Express', 'Mongo', 'Mongoose'],
      description: 'Full simulation of REI (Recreational Equipment, Inc.) product detail page with Service Oriented Architecture (SOA).',
      details: [
        'Maintained control of CSS behavior by utilizing CSS box-sizing property with border-box.',
        'Implemented aggregate method of mongoose to simplify sorting process and improve code readability.'
      ]
    }
  ],
  experience: [
    {
      name: 'Hack Reactor/Galvanize',
      place: 'Los Angeles, CA',
      titles: [
        {
          title: 'Software Engineering Technical Teaching Assistant',
          time: 'March 2020 - Present'
        }
      ],
      details: [
        'Prepare and execute comprehensive technical review sessions for junior-phase software engineering students; the cohort resulted in approximately 50% increase in passing rate compared to the previous cohort.',
        'Oversee and collaborate with the teaching assistant team to ensure the quality of education delivery.',
        'Consult students on a 1-1 basis to promote greater student engagement and provide a more creative learning outlet.'
      ]
    },
    {
      name: 'Calhome Inc., D.B.A., T-Motorsports',
      place: 'Pomona, CA',
      titles: [
        {
          title: 'Production Coordinator',
          time: 'May 2015- November 2016'
        },
        {
          title: 'Production Manager',
          time: 'November 2016– September 2019'
        }

      ],
      details: [
        'Supervised a team of 30 full-time employees and 20 part-time workers in a 24,000-square-foot facility that produced and delivered $9 million worth of product to the United States annually.',
        'Cultivated ongoing collaborative relationships with both foreign and national vendors to closely monitor production processes in all aspects, and ensured contract deadlines were met while maintaining product quality standards.',
        'Improved on-time shipment percentage from 80% at the beginning of 2016 to 95% at the end of 2018.'
      ]
    },
    {
      name: 'Buy4easy Inc.',
      place: 'Pomona, CA',
      titles: [
        {
          title: 'Pricing Analyst Intern',
          time: 'May–August 2013'
        }
      ],
      details: [
        'Monitored competitor’s new products and pricing techniques and responded with corrective actions.',
        'Negotiated freight rates with the carrier representative and saved more than $1 million each year.'
      ]
    }
  ],
  others: [
    {
      category: 'Leadership',
      details: 'Social Chair, Tau Omega Pi Entrepreneurship Fraternity, Berkeley, CA (January–May 2013).'
    },
    {
      category: 'Languages',
      details: 'Chinese Mandarin (native), English (fluent), Spanish (proficient).'
    },
    {
      category: 'Leadership',
      details: 'Wine & Spirit Education Trust (WSET) Level 1, Professional Association of Diving Instructors (PADI) Open Water Certificate.'
    }
  ]
};

module.exports = { portfolioData, resumeData };