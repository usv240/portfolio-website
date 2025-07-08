import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import styles from '../styles/Home.module.css';
import profilePic from '../assets/profile-pic.jpg'; 
import { TypeAnimation } from 'react-type-animation';

const Home = ({ onHireMeClick }) => {
  const [displayText, setDisplayText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []); 

  return (
    <section id="home" className={styles.homeSection}>
      <div className={`${styles.introBox} ${displayText ? styles.fadeIn : ''}`}>
        <img src={profilePic} alt="Ujwal Vanjare" className={styles.profilePic} />
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hello 👋, I'm <span className={styles.name}>Ujwal Vanjare</span>
          </h1>

          {displayText && (
            <>
              <TypeAnimation
                sequence={[
                  'Cloud Engineer',
                  2000,
                  'Backend Developer',
                  2000,
                  'Certified Solutions Architect',
                  2000,
                  'AWS | OCI | Java | Python',
                  2000,
                ]}
                wrapper="p"
                speed={40}
                className={styles.subtitle}
                repeat={Infinity}
              />

              <p className={styles.description1}>
                Backend & Cloud Engineer | UNC Charlotte Grad
              </p>
              <p className={styles.description2}>
                Building scalable APIs & cloud-native apps with reliability in mind.
              </p>


              <button onClick={onHireMeClick} className={styles.hireMeButton}>Hire Me --!</button>

              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                <a
                  href="https://github.com/usv240"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ffffff', fontSize: '1.5rem' }}
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/ujwalvanjare"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ffffff', fontSize: '1.5rem' }}
                >
                  <FaLinkedin />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
