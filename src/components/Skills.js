import React from 'react';
import '../styles/Skills.css'; // Make sure this points to the correct CSS file path
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaNodeJs, FaAws, FaDatabase, FaDocker, FaCube, FaPalette, FaTerminal, FaCogs } from 'react-icons/fa'; // Import icons from react-icons library

const Skills = () => (
  <div className="skills-container">
    <h2 className="skills-title">My Expertise</h2>
    <div className="skills-category">
      <h3 className="category-title">Front-End</h3>
      <div className="skills-list front-end">
        <div className="skill-card"><FaHtml5 /> HTML</div>
        <div className="skill-card"><FaCss3Alt /> CSS</div>
        <div className="skill-card"><FaJs /> JavaScript</div>
        <div className="skill-card"><FaReact /> ReactJS</div>
      </div>
    </div>
    <div className="skills-category">
      <h3 className="category-title">Back-End</h3>
      <div className="skills-list back-end">
        <div className="skill-card"><FaJava /> Java</div>
        <div className="skill-card"><FaPython /> Python</div>
        <div className="skill-card"><FaNodeJs /> NodeJS</div>
      </div>
    </div>
    <div className="skills-category">
      <h3 className="category-title">Cloud & Database</h3>
      <div className="skills-list cloud-database">
        <div className="skill-card"><FaAws /> AWS (EC2, S3, DynamoDB, RDS, Lambda, CloudFormation)</div>
        <div className="skill-card"><FaDatabase /> MySQL</div>
        <div className="skill-card"><FaDatabase /> PostgreSQL</div>
        <div className="skill-card"><FaDatabase /> MongoDB (NoSQL)</div>
        <div className="skill-card"><FaDatabase /> SQL</div>
      </div>
    </div>
    <div className="skills-category">
      <h3 className="category-title">Frameworks & Other Tools</h3>
      <div className="skills-list frameworks-tools">
        <div className="skill-card"><FaPalette /> SpringBoot</div>
        <div className="skill-card"><FaDocker /> Docker</div>
        <div className="skill-card"><FaCube /> Kubernetes</div>
        <div className="skill-card"><FaCogs /> Design Patterns</div>
        <div className="skill-card"><FaTerminal /> Shell Scripting</div>
        <div className="skill-card"><FaCogs /> C/C++</div>
      </div>
    </div>
  </div>
);

export default Skills;
