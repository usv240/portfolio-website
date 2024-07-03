import React from 'react';
import styles from '../styles/Contact.module.css'; // Update the import path as necessary
import { SocialIcon } from 'react-social-icons';

const Contact = ({ contactRef }) => {
  return (
    <section ref={contactRef} className={styles.contactSection}>
      <div id="contact" className={styles.contactContainer}>
        <h1 className={styles.contactTitle}>Get In Touch</h1>
        <p className={styles.contactDescription}>
          Should you find my profile interesting & attractive and wish to hire me for internships or a full-time job, please direct message or email me.
          <br />
          <span className={styles.highlight}>
            Also, let me know if you require any further information or need assistance with <strong>resume building</strong>, <strong>interview preparation</strong>, or anything else, or just wanna have a chat.
          </span>
        </p>
        <div className={styles.formContainer}>
          {/* Form inputs will go here */}
        </div>
        <div className={styles.socialLinks}>
          <SocialIcon url="https://linkedin.com/in/ujwalvanjare" />
          <SocialIcon url="https://github.com/usv240" />
          <SocialIcon url="mailto:ujwalvanjare7@gmail.com" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
