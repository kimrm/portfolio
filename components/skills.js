import React from "react";
import styles from "@/styles/page.module.css";
import Image from "next/image";
import Link from "next/link";

function Skills(props) {
  return (
    <section className={styles.skills_section}>
      <h2 className={styles.skill_heading_2}>Most used Tech Stack</h2>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <Image
            src="/skills/icons8-html5-96.png"
            alt="HTML5 logo"
            width={80}
            height={80}
          />
          <h3 className={styles.heading_3}>HTML5</h3>
        </div>
        <div className={styles.skill}>
          <Image
            src="/skills/icons8-css3-96.png"
            alt="CSS3 logo"
            width={80}
            height={80}
          />
          <h3 className={styles.heading_3}>CSS3</h3>
        </div>
        <div className={styles.skill}>
          <Image
            src="/skills/icons8-javascript-96.png"
            alt="Javascript logo"
            width={80}
            height={80}
          />
          <h3 className={styles.heading_3}>JavaScript</h3>
        </div>
        <div className={styles.skill}>
          <Image
            src="/skills/icons8-typescript-96.png"
            alt="Typescript logo"
            width={80}
            height={80}
          />
          <h3 className={styles.heading_3}>TypeScript</h3>
        </div>
        <div className={styles.skill}>
          <Image
            src="/skills/icons8-react-160.png"
            alt="React logo"
            width={80}
            height={80}
          />
          <h3 className={styles.heading_3}>React</h3>
        </div>
        <div className={styles.skill}>
          <Image
            src="/skills/icons8-php-96.png"
            alt="PHP logo"
            width={80}
            height={80}
          />
          <h3 className={styles.heading_3}>PHP</h3>
        </div>
        <div className={styles.skill}>
          <Image
            src="/skills/icons8-figma-96.png"
            alt="PHP logo"
            width={80}
            height={80}
          />
          <h3 className={styles.heading_3}>Figma</h3>
        </div>
      </div>
      <em className={styles.p_quote}>
        I love all sorts of coding and I touch on a lot of technologies in my
        day to day projects but the one combo I always enjoy the most is{" "}
        <span className={styles.marker}>React and Typescript</span>. The
        elegance and playfulness of Javascript and React with the structure of
        types with Typescript makes every project a joy to work with.
      </em>
      <Link href="/about" className={styles.button}>
        Read more about me
      </Link>
    </section>
  );
}

export default Skills;
