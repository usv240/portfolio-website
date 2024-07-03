import React from 'react';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
  return (
    <section id="about" className={styles.aboutMeSection}>
      <div className={styles.aboutMeContent}>
        <h2 className={styles.aboutMeTitle}>About Me</h2>
        <div className={styles.aboutMeText}>
          <p className={styles.intro}>👋 Hey there, I'm <span className={styles.name}>Ujwal</span>!</p>
          <p className={styles.description}>I'm on a mission to craft innovative software solutions that leave a lasting impact. With a blend of creativity and technical prowess, I thrive on unraveling complex problems and transforming ideas into reality.</p>
          <p className={styles.currentRole}>Currently, I'm interning at <span className={styles.highlight}>Oracle America</span> as a <span className={styles.highlight}>Cloud Solutions Engineer Intern</span>, where I'm gaining hands-on experience in cloud computing and solutions engineering.</p>
          <p className={styles.experience}>I have close to 3 years of industry experience, working on diverse projects and gaining a deep understanding of software development and cloud technologies.</p>
          <p className={styles.focus}>I'm delving deep into the realms of <span className={styles.highlight}>Machine Learning</span> and <span className={styles.highlight}>Cloud Computing</span>, fueling my passion to push the boundaries of what's possible in the digital landscape.</p>
          <p className={styles.interests}>When I'm not coding, you'll find me immersed in the vibrant world of <span className={styles.highlight}>anime</span>, exploring new gaming realms, kicking it on the soccer field, or concocting culinary delights in the kitchen.</p>
          <p className={styles.connect}>If you're into tech, gaming, anime, or simply want to connect, let's chat! Drop me a line and let's geek out together!</p>
        </div>

        <h3 className={styles.hobbiesListTitle}>My Hobbies</h3>
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
