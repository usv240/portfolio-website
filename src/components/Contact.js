import React from 'react';
import styles from '../styles/Contact.module.css'; // Update the import path as necessary
import { SocialIcon } from 'react-social-icons';

const Contact = ({ contactRef }) => {
  return (
    <section ref={contactRef} className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h1 className={styles.contactTitle}>Get In Touch</h1>
        <p className={styles.contactDescription}>
          Should you find my profile interesting & attractive and wish to hire me for such internships, please DM/Email me. Also, let me know if you require any further information.
        </p>
        <div className={styles.formContainer}>
          {/* Form inputs will go here */}
        </div>
        <div className={styles.socialLinks}>
          <SocialIcon url="https://linkedin.com/in/ujwalvanjare" />
          <SocialIcon url="https://github.com/usv240" />
          <SocialIcon url="mailto:ujwalv098@gmail.com" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
