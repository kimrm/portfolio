import React from "react";
import styles from "@/styles/page.module.css";
import Link from "next/link";
import ContactForm from "@/components/contactForm";

function Contact(props) {
  return (
    <section id="contact" className={styles.contact_section}>
      <div className={styles.form}>
        <div>
          <h2 className={styles.heading_2}>Contact me</h2>
          <p className={styles.description}>
            Would you like to work with me, or just wanna say hi? Feel free to
            contact me. Fill out the form or find me on social media via the
            links below.
          </p>
          <div className={styles.social_links}>
            <ul>
              <li>
                <Link
                  href="https://www.linkedin.com/in/kim-rune-m%C3%B8ller-32523394"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="http://github.com/kimrm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="https://cv.kimrune.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cv_button}
                >
                  My resume (in Norwegian)
                </Link>
              </li>
              <li>
                <Link
                  href="https://cv.kimrune.dev?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cv_button}
                >
                  My resume (in english)
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
