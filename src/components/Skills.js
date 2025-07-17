// Skills.jsx (with original icons + brand colors)
import React from 'react';
import skillsData from '../data/skills.json';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as DiIcons from 'react-icons/di';
import '../styles/Skills.css';

const AllIcons = {
  ...FaIcons,
  ...SiIcons,
  ...DiIcons,
};

const brandColors = {
  FaJava: '#f89820',
  FaPython: '#3776AB',
  FaNodeJs: '#68A063',
  FaReact: '#61DBFB',
  DiHtml5: '#e34c26',
  DiCss3: '#2965f1',
  DiJavascript1: '#f0db4f',
  SiDocker: '#2496ED',
  SiKubernetes: '#326ce5',
  SiMysql: '#00758f',
  SiPostgresql: '#336791',
  SiMongodb: '#4DB33D',
  SiOracle: '#f80000',
  FaAws: '#ff9900',
  SiSpring: '#6db33f',
  SiCplusplus: '#004482',
  FaDatabase: '#a9a9a9',
  FaTerminal: '#ffffff',
  FaCogs: '#cccccc',
};

const Skills = () => {
  const renderSkillPill = (skill, idx) => {
    const Icon = AllIcons[skill.icon] || FaIcons.FaCode;
    const color = brandColors[skill.icon] || '#38bdf8';

    return (
      <div key={idx} className="skill-pill">
        <Icon className="skill-icon" style={{ color }} />
        <span>{skill.name}</span>
      </div>
    );
  };

  const renderCategory = (category, idx) => (
    <div key={idx} className="skill-box">
      <h3 className="skill-box-title">{category.category}</h3>
      <div className="skills-grid">
        {category.skills.map(renderSkillPill)}
      </div>
    </div>
  );

  const leftBranch = skillsData.slice(0, 2);
  const rightBranch = skillsData.slice(2);

  return (
    <div id="skills" className="skills-section">
      <div className="skills-header">MY SKILLS</div>
      <div className="skills-tree">
        <div className="skills-column">{leftBranch.map(renderCategory)}</div>
        <div className="skills-column">{rightBranch.map(renderCategory)}</div>
      </div>
    </div>
  );
};

export default Skills;