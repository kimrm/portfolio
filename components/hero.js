import styles from "@/styles/page.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_heading}>
        <div>
          <h1 className={styles.heading_1}>
            Creating amazing digital experiences
          </h1>
        </div>
      </div>
      <div className={styles.description}>
        <p>
          Hi{" "}
          <span className={styles.emoji} role="img" aria-label="wave">
            👋
          </span>{" "}
          I'm a front- and backend developer specializing in PHP and JavaScript.
          Coding and developing great UI is my true passion and I constantly
          strive to create exceptional user experiences. I'm always looking for
          interesting projects so feel free to contact me.
        </p>
      </div>
      <div className={styles.buttons}>
        <Link href="/contact" className={styles.contact_me_button}>
          Contact me
        </Link>
        <Link href="/about" className={styles.about_me_button}>
          About me
        </Link>
      </div>
    </section>
  );
}
