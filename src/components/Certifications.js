import React from 'react';
import { FaAws } from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';
import styles from '../styles/Certifications.module.css'; // Create a separate CSS file

const Certifications = () => {
  return (
    <div className={styles.certificationsSection}>
      <h2 className={styles.heading}>Certifications</h2>
      <div className={styles.certificationsGrid}>
        <div className={`${styles.certCard} ${styles.aws}`}>
          <FaAws className={styles.icon} />
          AWS - Certified Solutions Architect
        </div>
        <div className={`${styles.certCard} ${styles.oci}`}>
          <SiOracle className={styles.icon} />
          OCI 2024 Architect Associate
        </div>
        <div className={styles.certCard}>
          <SiOracle className={styles.icon} />
          Oracle Autonomous Database Professional
        </div>
        <div className={styles.certCard}>
          <SiOracle className={styles.icon} />
          Oracle Generative AI 2024 Professional
        </div>
        <div className={styles.certCard}>
          <SiOracle className={styles.icon} />
          OCI 2023 Foundations Associate
        </div>
      </div>
    </div>
  );
};

export default Certifications;
