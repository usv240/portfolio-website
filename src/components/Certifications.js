import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaAws } from 'react-icons/fa';
import { SiOracle, SiLinuxfoundation } from 'react-icons/si';
import certifications from '../data/certifications.json';
import styles from '../styles/Certifications.module.css';

const Certifications = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
    setCerts(certifications);
  }, []);

  const getIcon = (provider) => {
    switch (provider) {
      case 'aws':
        return <FaAws className={styles.icon} />;
      case 'oracle':
        return <SiOracle className={styles.icon} />;
      case 'linuxfoundation':
        return <SiLinuxfoundation className={styles.icon} />;
      default:
        return <span className={styles.icon}>🎓</span>;
    }
  };

  return (
    <div id="certifications" className={styles.certificationsSection}>
      <h2 className={styles.heading}>Certifications</h2>
      <div className={styles.certificationsGrid}>
        {certs.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certCard}
            data-aos="fade-up"
          >
            <div className={styles.imageWrapper}>
              {cert.badge ? (
                <img
                  src={cert.badge}
                  alt={cert.title}
                  className={styles.badgeImage}
                  loading="lazy"
                />
              ) : (
                getIcon(cert.provider)
              )}
            </div>
            <span className={styles.certTitle}>{cert.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
