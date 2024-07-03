import React from 'react';
import { SiOracle } from 'react-icons/si'; // Import the Oracle icon
import styles from '../styles/JobExperience.module.css';

const JobExperience = () => {
  return (
    <section id="experience" className={styles.jobExperienceSection}>
      <div className={styles.jobExperienceContent}>
        <h2 className={styles.jobExperienceTitle}>Job Experience</h2>

        <div className={styles.jobItem}>
          <h3 className={styles.jobTitle}>Cloud Solutions Engineer Intern</h3>
          <p className={styles.company}><SiOracle className={styles.oracleIcon} /> Oracle America</p>
          <p className={styles.duration}>May 2024 - Present</p>
          <p className={styles.jobDescription}>
            Developed cloud solutions with OCI, boosting scalability and reliability. Designed and deployed cloud architectures, enhancing performance and cost-efficiency.
          </p>
        </div>

        <div className={styles.jobItem}>
          <h3 className={styles.jobTitle}>Software Development Engineer (SDE)</h3>
          <p className={styles.company}>Jio Platforms Limited</p>
          <p className={styles.duration}>Dec 2022 - Jul 2023</p>
          <p className={styles.jobDescription}>
            Enhanced security and streamlined document storage with Java. Developed APIs and cloud solutions, improving efficiency by 40%.
          </p>
        </div>

        <div className={styles.jobItem}>
          <h3 className={styles.jobTitle}>Software Engineer</h3>
          <p className={styles.company}>NEC Corporation India PVT LTD</p>
          <p className={styles.duration}>Sept 2021 - Dec 2022</p>
          <p className={styles.jobDescription}>
            Built RESTful APIs and microservices, increasing software efficiency by 40%. Transformed legacy applications into modern microservices, enhancing agility.
          </p>
        </div>

        <div className={styles.jobItem}>
          <h3 className={styles.jobTitle}>Programmer Analyst Trainee</h3>
          <p className={styles.company}>Cognizant Technology Solutions</p>
          <p className={styles.duration}>Dec 2020 - Sept 2021</p>
          <p className={styles.jobDescription}>
            Improved backend efficiency and data security by 20%. Boosted user engagement by 30% with innovative features.
          </p>
        </div>

      </div>
    </section>
  );
};

export default JobExperience;
