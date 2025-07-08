import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaAws } from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';
import styles from '../styles/Certifications.module.css';

const Certifications = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div id="certifications" className={styles.certificationsSection}>
      <h2 className={styles.heading}>Certifications</h2>
      <div className={styles.certificationsGrid}>

        <a
          href="https://drive.google.com/file/d/1mEBfbZmoeYWURlz3dBGNC_oQeR108CtX/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certCard}
          data-aos="fade-up"
        >
          <FaAws className={styles.icon} />
          AWS Certified Solutions Architect – Associate
        </a>

        <a
          href="https://drive.google.com/file/d/1TgPboDcAkmV9G4BZnOD9axHoq_0wBdT7/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certCard}
          data-aos="fade-up"
        >
          <FaAws className={styles.icon} />
          AWS Certified Developer – Associate
        </a>

        <a
          href="https://drive.google.com/file/d/1FjPsN4FGh0G3Lxy0bi4pnavyy-khBXl3/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certCard}
          data-aos="fade-up"
        >
          <SiOracle className={styles.icon} />
          Oracle Cloud Infrastructure 2024 Certified Architect Associate
        </a>

        <a
          href="https://drive.google.com/file/d/1SfQLipQ46IJBlKwa9SJUfQpUK738cIyL/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certCard}
          data-aos="fade-up"
        >
          <SiOracle className={styles.icon} />
          Oracle Cloud Infrastructure 2024 Generative AI Certified Professional
        </a>

        <a
          href="https://drive.google.com/file/d/1hZcuLPg53V6ThM08hUC2tUD_rwhoNdA1/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certCard}
          data-aos="fade-up"
        >
          <SiOracle className={styles.icon} />
          Oracle AI Vector Search Certified Professional
        </a>

        <a
          href="https://drive.google.com/file/d/1iPP1-LtBBjjBoPfeIl_0m9t4s_Z_Vfxx/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certCard}
          data-aos="fade-up"
        >
          <SiOracle className={styles.icon} />
          Oracle Autonomous Database Cloud 2023 Certified Professional
        </a>

        <a
          href="https://drive.google.com/file/d/1FYx6akR3ITaPETVluyTtdhNezOKrtx6K/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certCard}
          data-aos="fade-up"
        >
          <SiOracle className={styles.icon} />
          Oracle Cloud Success Navigator Essentials
        </a>

        <a
          href="https://drive.google.com/file/d/1eteD1rmD4G9gl10ZsNN_lACTb1b-qDQ9/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certCard}
          data-aos="fade-up"
        >
          <SiOracle className={styles.icon} />
          Oracle Fusion Cloud Applications ERP Certified Foundations Associate
        </a>

        <a
          href="https://drive.google.com/file/d/1poPkT6Rh--zVTx29jgwvRsxfLTe0ZEXO/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certCard}
          data-aos="fade-up"
        >
          <SiOracle className={styles.icon} />
          Oracle Cloud Infrastructure 2023 Certified Foundations Associate
        </a>

      </div>
    </div>
  );
};

export default Certifications;
