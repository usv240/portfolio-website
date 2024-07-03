import React from 'react';
import { FaUniversity } from 'react-icons/fa'; // Import the University icon
import styles from '../styles/Education.module.css'; // Make sure this points to the correct CSS file path

const Education = () => {
  return (
    <div id="education" className={styles.education} >
      <h2 style={{ color: 'white',fontSize: '2rem' }}>Education</h2>
      <div className={styles.educationItem}>
        <div>
          <FaUniversity className={styles.universityIcon} />
          <p><span className={styles.highlight}>University of North Carolina, Charlotte, NC, US.</span></p>
          <p><span className={styles.highlight}>Master of Science in Information Technology.</span> GPA: 4.0/4.0</p>
          <p>Graduate Teaching Assistant, Department of Computer Science </p>
        </div>
      </div>
      <div className={styles.educationItem}>
        <div>
          <FaUniversity className={styles.universityIcon} />
          <p><span className={styles.highlight}>Basaveshwar Engineering College, KA, IN. Sept 2020</span></p>
          <p><span className={styles.highlight}>Bachelors of Engineering in Computer Science and Engineering.</span> GPA: 8.27/10</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
