import React, { useState, useEffect } from 'react';
import { FaAws } from 'react-icons/fa'; // AWS icon
import { SiOracle } from 'react-icons/si'; // Oracle icon
import styles from '../styles/Home.module.css';
import profilePic from '../assets/profile-pic.jpg'; // Profile picture

const Home = ({ onHireMeClick }) => {
  const [displayText, setDisplayText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText(true);
    }, 2000); // Delay for 2 seconds

    return () => clearTimeout(timer);
  }, []); // Run only once on component mount

  return (
    <section id="home" className={styles.homeSection}>
      <div className={`${styles.introBox} ${displayText ? styles.fadeIn : ''}`}>
        <img src={profilePic} alt="Ujwal Vanjare" className={styles.profilePic} />
        <div className={styles.content}>
          <h1 className={styles.title}>Hello 👋, I'm <span className={styles.name}>Ujwal Vanjare</span></h1>
          {displayText && (
            <>
              <p className={styles.subtitle}>Student & Software Developer</p>
              <div className={styles.certifications}>
                <div className={`${styles.certification} ${styles.awsHighlight}`}>
                  <FaAws className={styles.awsIcon} /> AWS - Certified Solutions Architect
                </div>
                <div className={`${styles.certification} ${styles.ociHighlight}`}>
                  <SiOracle className={styles.oracleIcon} /> OCI 2024 Architect Associate
                </div>
                <div className={styles.certification}>
                  <SiOracle className={styles.oracleIcon} /> Oracle Autonomous Database Professional
                </div>
                <div className={styles.certification}>
                  <SiOracle className={styles.oracleIcon} /> Oracle Generative AI 2024 Professional
                </div>
                <div className={styles.certification}>
                  <SiOracle className={styles.oracleIcon} /> OCI 2023 Foundations Associate
                </div>
              </div>
              <p className={styles.description1}>
                As a Cloud Solutions Engineer Intern, I specialize in building scalable and efficient cloud architectures, developing Restful APIs, and creating responsive web applications.
              </p>
              <p className={styles.highlightText}>
                I have <span className={styles.highlight}>close to 3 years of industry experience</span>.
              </p>
              <p className={styles.description2}>I am currently looking for Full-Time roles in 2024.</p>
              <button onClick={onHireMeClick} className={styles.hireMeButton}>Hire Me --!</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
