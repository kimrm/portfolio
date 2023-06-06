import Image from "next/image";
import styles from "@/styles/page.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_heading}>
        <div>
          <h1 className={styles.heading_1}>Creating amazing web experiences</h1>
        </div>
      </div>

      <Link href="#contact" className={styles.contact_me_button}>
        Contact me
      </Link>

      <div className={styles.description}>
        <p>
          Hi! I'm Kim. A passionate developer specializing in PHP, JavaScript,
          HTML, and CSS. Coding and UI design are my true passions, and I
          constantly strive to create exceptional user experiences. Currently,
          I'm trying to learn what makes a good UX, while exploring modern
          Javascript frameworks like React and Next.js.
        </p>
      </div>
    </section>
  );
}
