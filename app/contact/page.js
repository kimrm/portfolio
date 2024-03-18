import Contact from "@/components/contact";
import styles from "@/styles/page.module.css";
import Link from "next/link";
import ContactForm from "@/components/contactForm";

export default function ContactPage() {
  return (
    <div className={styles.content_container}>
      <h1 className={styles.heading}>Contact</h1>
      <p className={styles.p_description}>
        Would you like to work with me, or just wanna say hi? Feel free to
        contact me. Fill out the form or find me on social media via the links
        below.
      </p>
      <div className={styles.form}>
        <div>
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
    </div>
  );
}
