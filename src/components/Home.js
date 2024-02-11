import React, { useState, useEffect } from 'react';
import { FaAws } from 'react-icons/fa'; // Import the AWS icon
import styles from '../styles/Home.module.css';

const Home = ({ onHireMeClick }) => {
  const [displayText, setDisplayText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText(true);
    }, 2000); // Delay for 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []); // Run only once on component mount

  return (
    <section className={styles.homeSection}>
      <div className={`${styles.introBox} ${displayText ? styles.fadeIn : ''}`}>
        <h1 className={styles.title}>Hello, I'm <span className={styles.name}>Ujwal Vanjare</span> 👋</h1>
        {displayText && (
          <>
            <p className={styles.subtitle}>Student & Software Developer</p>
            {/* Render the AWS icon */}
            <div className={styles.certification}>
              <FaAws className={styles.awsIcon} /> AWS - Certified Solutions Architect
            </div>
            <p className={styles.description1}>
              I build Restful APIs using Java and SpringBoot,a Responsive web developer.
            </p>
            <p className={styles.description2}>
              I am currently looking for Summer Internships in 2024.
            </p>
            {/* Step 3: Attach the onClick event to the "Hire Me" button */}
            <button onClick={onHireMeClick} className={styles.hireMeButton}>Hire Me --!</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
