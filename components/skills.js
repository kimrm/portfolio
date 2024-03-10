import React from "react";
import styles from "@/styles/page.module.css";
import Image from "next/image";

function Skills(props) {
  return (
    <section className={styles.skills_section}>
      <h2 className={styles.skill_heading_2}>My Current Tech Stack</h2>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <Image
            src="/skills/icons8-html5-96.png"
            alt="HTML5 logo"
            width={80}
            height={80}
            className={styles.skill_image}
          />
          <h3 className={styles.heading_3}>HTML5</h3>
        </div>
        <div className={styles.skill}>
          <Image
            src="/skills/icons8-css3-96.png"
            alt="CSS3 logo"
            width={80}
            height={80}
            className={styles.skill_image}
          />
          <h3 className={styles.heading_3}>CSS3</h3>
        </div>
        <div className={styles.skill}>
          <Image
            src="/skills/icons8-javascript-96.png"
            alt="Javascript logo"
            width={80}
            height={80}
            className={styles.skill_image}
          />
          <h3 className={styles.heading_3}>JavaScript</h3>
        </div>
        <div className={styles.skill}>
          <Image
            src="/skills/icons8-typescript-96.png"
            alt="Typescript logo"
            width={80}
            height={80}
            className={styles.skill_image}
          />
          <h3 className={styles.heading_3}>TypeScript</h3>
        </div>
        <div className={styles.skill}>
          <Image
            src="/skills/icons8-react-160.png"
            alt="React logo"
            width={80}
            height={80}
            className={styles.skill_image}
          />
          <h3 className={styles.heading_3}>React</h3>
        </div>
        <div className={styles.skill}>
          <Image
            src="/skills/icons8-php-96.png"
            alt="PHP logo"
            width={80}
            height={80}
            className={styles.skill_image}
          />
          <h3 className={styles.heading_3}>PHP</h3>
        </div>
        <div className={styles.skill}>
          <Image
            src="/skills/icons8-figma-96.png"
            alt="PHP logo"
            width={80}
            height={80}
            className={styles.skill_image}
          />
          <h3 className={styles.heading_3}>Figma</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;