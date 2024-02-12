import React from 'react';
import styles from "@/styles/page.module.css";

function Footer(props) {
    return (
        <section className={styles.privacy_section}>
            <h4>&copy; {new Date().getFullYear()} - kimrune.dev</h4>
        </section>
    );
}

export default Footer;