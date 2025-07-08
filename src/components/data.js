import jioLogo from '../assets/jio-logo.png';
import necLogo from '../assets/nec-logo.png';
import oracleLogo from '../assets/oracle-logo.png';
import cognizantLogo from '../assets/cognizant-logo.png';

const experienceData = [
  {
    company: 'Oracle America',
    role: 'Cloud Solutions Engineer Intern',
    location: 'Austin, TX',
    logo: oracleLogo,
    duration: 'May 2024 – Aug 2024',
    skills: 'OCI Compute, Kubernetes, OCI Functions, API Gateway, Autonomous DB, Python, Bash, Grafana',
    bullets: [
      'Automated infrastructure provisioning using OCI services (Compute, Functions, API Gateway).',
      'Streamlined backend operations with Python scripts and monitored systems via Grafana & Log Explorer.',
      'Managed Kubernetes pods for deployment, scaling, and issue troubleshooting.',
      'Contributed to Agile development, enhancing scalability and reliability of cloud-native systems.'
    ]
  },
  {
    company: 'Jio Platforms',
    role: 'Software Development Engineer (SDE)',
    location: 'Bangalore, India',
    logo: jioLogo,
    duration: 'Dec 2022 – Jul 2023',
    skills: 'Java, SpringBoot, AWS S3, Kafka, Dell ECS, MongoDB, Gradle, DevOps, API Development',
    bullets: [
      'Built secure high-performance APIs using Java, Dell ECS, and AWS S3 for efficient document handling.',
      'Led SpringBoot backend development and Gradle build optimization, reducing access latency by 50%.',
      'Built Kafka pipelines to transfer files to object storage on Linux-based infrastructure.',
      'Implemented DevOps automation and Agile practices for stable and rapid releases.'
    ]
  },
  {
    company: 'NEC Corporation India Pvt Ltd',
    role: 'Software Engineer',
    location: 'Bangalore, India',
    logo: necLogo,
    duration: 'Sep 2021 – Dec 2022',
    skills: 'Java, SpringBoot, AWS, Microservices, Maven, REST APIs, System Migration, Cloud Optimization',
    bullets: [
      'Developed modular microservices using SpringBoot and Maven.',
      'Migrated legacy apps to cloud-based microservices, improving agility and POS resilience by 35%.',
      'Built and deployed REST APIs on AWS for high-performance retail systems.',
      'Mentored junior developers on SpringBoot, code quality, and cloud best practices.'
    ]
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Programmer Analyst Trainee',
    location: 'Bangalore, India',
    logo: cognizantLogo,
    duration: 'Dec 2020 – Sep 2021',
    skills: 'Java, SpringBoot, AWS, Backend Development',
    bullets: [
      'Optimized backend insurance claims processing using Java and AWS.',
      'Built automated claims pipelines on AWS, cutting processing time by 25% and boosting engagement by 15%.'
    ]
  }
];

export default experienceData;
