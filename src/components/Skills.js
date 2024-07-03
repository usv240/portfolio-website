import React from 'react';
import '../styles/Skills.css'; // Make sure this points to the correct CSS file path
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaNodeJs, FaAws, FaDatabase, FaDocker, FaCube, FaPalette, FaTerminal, FaCogs, FaCloud } from 'react-icons/fa'; // Import icons from react-icons library

const Skills = () => (
  <div id="skills" className="skills-container">
    <h2 className="skills-title">My Expertise</h2>
    <div className="skills-category">
      <h3 className="category-title">Front-End</h3>
      <div className="skills-list front-end">
        <div className="skill-card"><FaHtml5 className="icon" /> HTML</div>
        <div className="skill-card"><FaCss3Alt className="icon" /> CSS</div>
        <div className="skill-card"><FaJs className="icon" /> JavaScript</div>
        <div className="skill-card"><FaReact className="icon" /> ReactJS</div>
      </div>
    </div>
    <div className="skills-category">
      <h3 className="category-title">Back-End</h3>
      <div className="skills-list back-end">
        <div className="skill-card"><FaJava className="icon" /> Java</div>
        <div className="skill-card"><FaPython className="icon" /> Python</div>
        <div className="skill-card"><FaNodeJs className="icon" /> NodeJS</div>
      </div>
    </div>
    <div className="skills-category">
      <h3 className="category-title">Cloud & Database</h3>
      <div className="skills-list cloud-database">
        <div className="skill-card"><FaAws className="icon" /> AWS (EC2, S3, DynamoDB, RDS, Lambda, CloudFormation)</div>
        <div className="skill-card"><FaCloud className="icon" /> Oracle Cloud Infrastructure (OCI)</div>
        <div className="skill-card"><FaDatabase className="icon" /> MySQL</div>
        <div className="skill-card"><FaDatabase className="icon" /> PostgreSQL</div>
        <div className="skill-card"><FaDatabase className="icon" /> MongoDB (NoSQL)</div>
        <div className="skill-card"><FaDatabase className="icon" /> SQL</div>
      </div>
    </div>
    <div className="skills-category">
      <h3 className="category-title">Frameworks & Other Tools</h3>
      <div className="skills-list frameworks-tools">
        <div className="skill-card"><FaPalette className="icon" /> SpringBoot</div>
        <div className="skill-card"><FaDocker className="icon" /> Docker</div>
        <div className="skill-card"><FaCube className="icon" /> Kubernetes</div>
        <div className="skill-card"><FaCogs className="icon" /> Design Patterns</div>
        <div className="skill-card"><FaTerminal className="icon" /> Shell Scripting</div>
        <div className="skill-card"><FaCogs className="icon" /> C/C++</div>
      </div>
    </div>
  </div>
);

export default Skills;
