import React from 'react';
import jioLogo from '../assets/jio-logo.png'; // Jio logo
import necLogo from '../assets/nec-logo.png'; // NEC logo
import cognizantLogo from '../assets/cognizant-logo.png'; // Cognizant logo
import oracleLogo from '../assets/oracle-logo.png'; // Oracle logo
import styles from '../styles/JobExperience.module.css';

const JobExperience = () => {
  return (
    <section id="experience" className={styles.jobExperienceSection}>
      <h2 className={styles.jobExperienceTitle}>Job Experience</h2>
      <div className={styles.jobExperienceContent}>
        
        {/* Job Card 1 */}
        <div className={styles.jobCard}>
          <div className={styles.company}>
            <img src={oracleLogo} className={styles.companyLogo} alt="Oracle Logo" />
            <p>Oracle America</p>
          </div>
          <h3 className={styles.jobTitle}>Cloud Solutions Engineer Intern</h3>
          <p className={styles.duration}>May 2024 - Aug 2024</p>
          <p className={styles.jobDescription}>
            Architected and deployed scalable cloud solutions with OCI, enhancing resource provisioning and reliability by 30%.
          </p>
        </div>
        
        {/* Job Card 2 */}
        <div className={styles.jobCard}>
          <div className={styles.company}>
            <img src={jioLogo} className={styles.companyLogo} alt="Jio Platforms Logo" />
            <p>Jio Platforms Limited</p>
          </div>
          <h3 className={styles.jobTitle}>Software Development Engineer (SDE)</h3>
          <p className={styles.duration}>Dec 2022 - Jul 2023</p>
          <p className={styles.jobDescription}>
            Spearheaded the development of APIs and cloud solutions, increasing document storage security and efficiency by 40%.
          </p>
        </div>
    
        {/* Job Card 3 */}
        <div className={styles.jobCard}>
          <div className={styles.company}>
            <img src={necLogo} className={styles.companyLogo} alt="NEC Logo" />
            <p>NEC Corporation India PVT LTD</p>
          </div>
          <h3 className={styles.jobTitle}>Software Engineer</h3>
          <p className={styles.duration}>Sept 2021 - Dec 2022</p>
          <p className={styles.jobDescription}>
            Led the transformation of legacy systems into microservices, boosting software efficiency by 40% and enhancing agility.
          </p>
        </div>

        {/* Job Card 4 */}
        <div className={styles.jobCard}>
          <div className={styles.company}>
            <img src={cognizantLogo} className={styles.companyLogo} alt="Cognizant Logo" />
            <p>Cognizant Technology Solutions</p>
          </div>
          <h3 className={styles.jobTitle}>Programmer Analyst Trainee</h3>
          <p className={styles.duration}>Dec 2020 - Sept 2021</p>
          <p className={styles.jobDescription}>
            Developed automated systems on AWS that improved data security by 20% and increased user engagement by 30%.
          </p>
        </div>

      </div>
    </section>
  );
};

export default JobExperience;
