// AboutMe.js
import React from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
  return (
    <section className={styles.aboutMeSection}>
      <div className={styles.aboutMeContent}>
        <h2 className={styles.aboutMeTitle}>About Me</h2>
        <p>Hello, my name is Ujwal, and I love developing software that makes a difference. My passion for problem-solving and desire to learn about programming paradigms led me to pursue a master's degree in computer science.</p>
        <p>I strive to write clean, reusable, and efficient code. Currently, I'm diving into Machine Learning and Cloud Computing, aiming to integrate these technologies into my full-stack applications to enhance their performance and efficiency.</p>
        <p>When I'm not coding, I enjoy watching anime, gaming, playing soccer, and cooking. If you share similar interests or want to discuss technology, feel free to reach out!</p>
        
        <h3 className={styles.hobbiesList}>My Hobbies</h3>
        <ul className={styles.hobbiesList}>
          <li className={styles.hobbyItem}>Playing Soccer</li>
          <li className={styles.hobbyItem}>Cooking</li>
          <li className={styles.hobbyItem}>Anime and Gaming</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
