import React, { useState, useEffect } from 'react';
import { FaAws } from 'react-icons/fa'; // Import the AWS icon
import { SiOracle } from 'react-icons/si'; // Import the Oracle icon
import styles from '../styles/Home.module.css';
import profilePic from '../assets/profile-pic.jpg'; // Import your profile picture

const Home = ({ onHireMeClick }) => {
  const [displayText, setDisplayText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText(true);
    }, 2000); // Delay for 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []); // Run only once on component mount

  return (
    <section id="home" className={styles.homeSection}>
      <div className={`${styles.introBox} ${displayText ? styles.fadeIn : ''}`}>
        <img src={profilePic} alt="Ujwal Vanjare" className={styles.profilePic} /> {/* Profile picture */}
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Hello 👋, I'm <span className={styles.name}>Ujwal Vanjare</span> </h1>
            {displayText && (
              <>
                <p className={styles.subtitle}>Student & Software Developer</p>
                {/* Render the AWS icon */}
                
                {/* Render the Oracle icon */}
                <div className={styles.certification}>
                  <SiOracle className={styles.oracleIcon} /> Oracle Cloud Infrastructure 2023 Certified Foundations Associate
                </div>
                {/* Render the Oracle icon */}
                <div className={styles.certification}>
                  <SiOracle className={styles.oracleIcon} /> Oracle Cloud Infrastructure 2024 Generative AI Certified Professional
                </div>
                <div className={styles.certification}>
                  <FaAws className={styles.awsIcon} /> AWS - Certified Solutions Architect
                </div>
                <p className={styles.description1}>
                  As a Cloud Solutions Engineer Intern, I specialize in building scalable and efficient cloud architectures, developing Restful APIs with Java and SpringBoot, and creating responsive web applications. 
                </p>
                <p>
                  I have <span className={styles.highlight}>close to 3 years of industry experience</span>.
                </p>
                <p className={styles.description2}>
                  I am currently looking for Full Time roles in 2024.
                </p>
                <button onClick={onHireMeClick} className={styles.hireMeButton}>Hire Me --!</button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
