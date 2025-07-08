import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/JobExperience.module.css';
import experienceData from './data';
import { FaCheckCircle } from 'react-icons/fa'; // ✅ Icon for bullet

const JobExperience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>Job Experience</h2>
      <div className={styles.container}>
        {experienceData.map((exp, index) => (
          <div className={styles.jobRow} key={index} data-aos="fade-up">
            <div className={styles.left}>
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className={styles.logo}
                />
              )}
              <p className={styles.role}>{exp.role}</p>
              <p className={styles.duration}>{exp.duration}</p>
              <p className={styles.skills}>
                <strong>Skills:</strong> {exp.skills}
              </p>

              {/* ✅ Tags / Badges */}
              <div className={styles.tags}>
                {exp.tags &&
                  exp.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
              </div>
            </div>

            <div className={styles.right}>
              <h3 className={styles.company}>
                {exp.company} –{' '}
                <span className={styles.location}>{exp.location}</span>
              </h3>
              <ul className={styles.bulletList}>
                {exp.bullets.map((point, idx) => (
                  <li key={idx}>
                    <FaCheckCircle className={styles.bulletIcon} />
                    <span className={styles.bulletText}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobExperience;
