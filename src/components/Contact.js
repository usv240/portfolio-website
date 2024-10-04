import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from '../styles/Contact.module.css'; // Update the import path as necessary

const Contact = ({ contactRef }) => {
  return (
    <section ref={contactRef} className={styles.contactSection}>
      <div id="contact" className={styles.contactContainer}>
        <h1 className={styles.contactTitle}>Let's Connect!</h1>
        <p className={styles.contactDescription}>
          If you're interested in collaborating, hiring me for internships or full-time roles, or just want to have a chat, feel free to message or email me.
          <br />
          <span className={styles.highlight}>
            I'm also open to helping with <strong>resume building</strong>, <strong>interview prep</strong>, or anything else you might need.
          </span>
        </p>
        <div className={styles.socialLinks}>
          <SocialIcon url="https://linkedin.com/in/ujwalvanjare" className={styles.socialIcon} />
          <SocialIcon url="https://github.com/usv240" className={styles.socialIcon} />
          <SocialIcon url="mailto:ujwalvanjare7@gmail.com" className={styles.socialIcon} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
