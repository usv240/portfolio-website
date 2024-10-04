import React from 'react';
import { FaUniversity, FaLaptopCode, FaDatabase, FaCloud, FaCode, FaNetworkWired } from 'react-icons/fa'; // Import icons for subjects
import styles from '../styles/Education.module.css'; // Make sure this points to the correct CSS file path

const Education = () => {
  return (
    <div id="education" className={styles.education}>
      <h2 className={styles.educationTitle}>Education</h2>
      
      {/* Graduate Education */}
      <div className={styles.educationItem}>
        <FaUniversity className={styles.universityIcon} />
        <h3 className={styles.universityName}>University of North Carolina, Charlotte, NC, US</h3>
        <p className={styles.degreeTitle}>Master of Science in Information Technology</p>
        <p className={styles.gpa}>GPA: 4.0/4.0</p>
        <p className={styles.role}>Graduate Teaching Assistant, Department of Computer Science</p>
        <h4 className={styles.courseworkTitle}>Key Coursework</h4>
        <div className={styles.courseworkList}>
          <div className={styles.course}>
            <FaNetworkWired className={styles.icon} /> Network Based Application Development
          </div>
          <div className={styles.course}>
            <FaCode className={styles.icon} /> Software Systems Design & Implementation
          </div>
          <div className={styles.course}>
            <FaDatabase className={styles.icon} /> Applied Databases
          </div>
          <div className={styles.course}>
            <FaCloud className={styles.icon} /> Big Data Analytics
          </div>
          <div className={styles.course}>
            <FaLaptopCode className={styles.icon} /> Human-Centered Design
          </div>
        </div>
      </div>
      
      {/* Undergraduate Education */}
      <div className={styles.educationItem}>
        <FaUniversity className={styles.universityIcon} />
        <h3 className={styles.universityName}>Basaveshwar Engineering College, Karnataka, IN</h3>
        <p className={styles.degreeTitle}>Bachelor of Engineering in Computer Science and Engineering</p>
        <p className={styles.gpa}>CGPA: 8.27/10</p>
        <h4 className={styles.courseworkTitle}>Key Coursework</h4>
        <div className={styles.courseworkList}>
          <div className={styles.course}>
            <FaCode className={styles.icon} /> Data Structures Using C
          </div>
          <div className={styles.course}>
            <FaNetworkWired className={styles.icon} /> Computer Networks
          </div>
          <div className={styles.course}>
            <FaDatabase className={styles.icon} /> Database Management Systems
          </div>
          <div className={styles.course}>
            <FaCode className={styles.icon} /> Object-Oriented Programming with C++
          </div>
          <div className={styles.course}>
            <FaLaptopCode className={styles.icon} /> Artificial Intelligence and Machine Learning
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
