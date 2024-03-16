import Contact from "@/components/contact";
import styles from "@/styles/page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.content_container}>
      <h1 className={styles.heading}>Contact</h1>
      <p className={styles.p_description}>
        If you want to get in touch with me, you can use the form below or send
        me an email at kim@kimrune.dev
      </p>
      <Contact />
    </div>
  );
}
