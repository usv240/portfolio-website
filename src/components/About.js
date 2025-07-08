import React from 'react';
import { FaFutbol, FaGamepad, FaUtensils } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
  return (
    <section id="about" className={styles.aboutMeSection}>
      <div className={styles.aboutMeContent}>
        <h2 className={styles.aboutMeTitle}>About Me</h2>

        <div className={styles.aboutMeText}>
          <p className={styles.intro}>
            👋 Hey there, I'm <span className={styles.name}>Ujwal</span>!
          </p>

          <p className={styles.subtitleTyped}>
            <ReactTyped
              strings={[
                'Cloud Enthusiast ☁️',
                'Backend Engineer 🛠️',
                'DevOps Explorer 🚀',
                'Anime + Gaming Fan 🎮'
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </p>

          <p className={`${styles.description} ${styles.fadeIn1}`}>
            I’m passionate about building backend systems and cloud-native solutions that make a real impact.
            I enjoy solving complex infrastructure challenges with clean, scalable code.
          </p>

          <p className={`${styles.currentRole} ${styles.fadeIn2}`}>
            In Summer 2024, I interned at <span className={styles.highlight}>Oracle America</span> as a
            <span className={styles.highlight}> Cloud Solutions Engineer Intern</span>, gaining hands-on experience
            with OCI, automation, and cloud-native architectures.
          </p>

          <p className={`${styles.experience} ${styles.fadeIn3}`}>
            Over the past 3 years, I’ve worked on a variety of backend and DevOps projects — from microservices
            to cloud deployments — across multiple environments.
          </p>

          <p className={`${styles.focus} ${styles.fadeIn4}`}>
            I’m currently deep diving into <span className={styles.highlight}>Kubernetes internals</span>,
            <span className={styles.highlight}> serverless stacks</span>, and building
            <span className={styles.highlight}> LLM-powered backend tools</span>.
          </p>

          <p className={`${styles.interests} ${styles.fadeIn5}`}>
            Outside of work, I’m into anime, football, gaming marathons, and experimenting in the kitchen.
          </p>

          <p className={`${styles.connect} ${styles.fadeIn6}`}>
            Let’s build something cool together. If you’re into backend tech, anime theories, or just want to chat —
            drop me a message!
          </p>
        </div>

        <div className={styles.divider}></div>

        <h3 className={styles.hobbiesListTitle}>My Hobbies</h3>
        <p className={styles.nowLine}>
          🔭 Currently exploring: Serverless architectures, LLM apps, and Kubernetes internals.
        </p>

        <ul className={styles.hobbiesList}>
          <li className={styles.hobbyItem}><FaFutbol className={styles.icon} /> Playing Football</li>
          <li className={styles.hobbyItem}><FaUtensils className={styles.icon} /> Cooking</li>
          <li className={styles.hobbyItem}><FaGamepad className={styles.icon} /> Anime and Gaming</li>
        </ul>

        <div className={styles.quoteBox}>
          <p>“Code like it's art, debug like a detective.”</p>
          <p>“Stay curious, keep building.”</p>
          <p>“Every bug is just a story waiting to be solved.”</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
