import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'; // Import icons
import '../styles/Project.css'; // Make sure the CSS file path is correct

const Projects = () => {
  // Add your projects details here
  const projects = [
    {
      title: 'Finance Tracker',
      technologies: 'JavaScript, React, Node.js, AWS',
      description: 'A cloud-based finance application for tracking budgets and expenditures with enhanced data visualization.',
      githubUrl: 'https://github.com/usv240/FinanceTracker_R',
    },

    {
      title: 'AWS Cloud-Optimized Website Architecture',
      technologies: 'AWS, EC2, ELB, Auto Scaling, S3, EBS, RDS, DynamoDB, CloudFront',
      description: 'Architected a high-performance, scalable website on AWS with various AWS services, significantly boosting availability and optimizing content delivery.',
      // githubUrl: 'https://github.com/yourusername/aws-cloud-optimized-website',

    },
    {
      title: 'Online Voting System using Blockchain',
      technologies: 'Python, Flask, Java, Android, AWS S3, DynamoDB',
      description: 'Created a secure Android voting application using blockchain technology for voter authentication and data integrity.',
      githubUrl: 'https://github.com/usv240/Online-Voting-System-using-Blockchain',

    },
    {
      title: 'Cab Service (Java/Spring Boot)',
      technologies: 'Java, Spring Boot',
      description: 'Engineered a Java/Spring Boot cab service platform with backend API solutions for efficient ride management.',
      githubUrl: 'https://github.com/usv240/Cab-Service-in-SpringBoot',

    },
    {
      title: 'Snake and Ladder Game (Python- Machine coding)',
      technologies: 'Python',
      description: 'Developed a Python Snake and Ladder game with machine coding, highlighting programming and code optimization skills.',
      githubUrl: 'https://github.com/usv240/Snake_and_Ladder_Machine_Coding_Python_Solution',

    },
    {
      title: 'Interactive Railway Chatbot',
      technologies: 'Python, Chatbot Module',
      description: 'A chatbot designed to assist users with railway-related queries and provide interactive responses.',
      githubUrl: 'https://github.com/usv240/Interactive-Railway-Chatbot'
    }
  ];

  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <span className="project-technologies">{project.technologies}</span>
            <h3 className="project-title">{project.title}</h3>
            <span className="project-description">{project.description}</span>
            <div className="project-links">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="git-link"><FaGithub /> GIT</a>
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> LIVE</a>}
              {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"><FaPlay /> DEMO</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
