import React from 'react';
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
                        <Link href="https://www.linkedin.com/in/kim-rune-m%C3%B8ller-32523394">
                            linkedIn
                        </Link>
                        <Link href="http://github.com/kimrm">Github</Link>
                        <Link href="https://cv.kimrune.dev" className={styles.cv_button}>
                            My resume (in Norwegian)
                        </Link>
                    </div>
                </div>
                <div>
                    <ContactForm/>
                </div>
            </div>
        </section>
    );
}

export default Contact;