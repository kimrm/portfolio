import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/page.module.css";
import ContactForm from "@/components/contactForm";
import Projects from "@/components/projects";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <section>
        <Projects />
      </section>
      <section className={styles.skills_section}>
        <h2 className={styles.skill_heading_2}>My Current Tech Stack</h2>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <Image
              src="/skills/icons8-html5-96.png"
              alt="HTML5 logo"
              width={100}
              height={100}
              className={styles.skill_image}
            />
            <h3 className={styles.heading_3}>HTML5</h3>
          </div>
          <div className={styles.skill}>
            <Image
              src="/skills/icons8-css3-96.png"
              alt="CSS3 logo"
              width={100}
              height={100}
              className={styles.skill_image}
            />
            <h3 className={styles.heading_3}>CSS3</h3>
          </div>
          <div className={styles.skill}>
            <Image
              src="/skills/icons8-javascript-96.png"
              alt="Javascript logo"
              width={100}
              height={100}
              className={styles.skill_image}
            />
            <h3 className={styles.heading_3}>Javascript</h3>
          </div>
          <div className={styles.skill}>
            <Image
              src="/skills/icons8-php-96.png"
              alt="PHP logo"
              width={100}
              height={100}
              className={styles.skill_image}
            />
            <h3 className={styles.heading_3}>PHP</h3>
          </div>
          <div className={styles.skill}>
            <Image
              src="/skills/icons8-figma-96.png"
              alt="PHP logo"
              width={100}
              height={100}
              className={styles.skill_image}
            />
            <h3 className={styles.heading_3}>Figma</h3>
          </div>
        </div>
      </section>
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
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className={styles.privacy_section}>
        <h4>&copy; 2023 - kimrune.dev</h4>
      </section>
    </main>
  );
}
