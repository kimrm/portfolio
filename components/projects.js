import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projects_section}>
      <h2 className={styles.heading_2}>My Latest projects</h2>
      <div className={styles.projects}>
        <div className={styles.project}>
          <Image
            src="/knpsenja.png"
            alt="Next.js logo"
            width={200}
            height={200}
            className={styles.project_image}
          />
          <div className={styles.project_content}>
            <h3 className={styles.heading_3}>
              Kunnskaps- og Næringsparken Senja Website
            </h3>
            <div className={styles.description}>
              <p>
                This is a website I made for a local building housing several
                businesses. It&apos;s a custom made Wordpress theme with custom
                fields og posts. Styling is done with Bootstrap.
              </p>
            </div>
            <div className={styles.links}>
              <Link
                href="https://knpsenja.no"
                target="_blank"
                className={styles.link}
              >
                <span>Visit site</span>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <Image
            src="/foodblog.png"
            alt="Next.js logo"
            width={200}
            height={200}
            className={styles.project_image}
          />
          <div className={styles.project_content}>
            <h3 className={styles.heading_3}>Møllers Kitchen Food blog</h3>
            <div className={styles.description}>
              <p>
                Food blog made with vanilla javascript, HTML and CSS. Content is
                served from a headless Wordpress installation. This project was
                a project exam for a frontend developer course.
              </p>
            </div>
            <div className={styles.links}>
              <Link
                href="https://astounding-jalebi-1c1cf5.netlify.app/"
                target="_blank"
                className={styles.link}
              >
                <span>Visit site</span>
              </Link>
              <Link
                href="https://github.com/kimrm/foodblog"
                target="_blank"
                className={styles.link}
              >
                <span>Github</span>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <Image
            src="/rainy_days.png"
            alt="Next.js logo"
            width={200}
            height={200}
            className={styles.project_image}
          />
          <div className={styles.project_content}>
            <h3 className={styles.heading_3}>Rainy Days</h3>
            <div className={styles.description}>
              <p>
                This is a project I made for a frontend developer course
                assignment. It&apos;s a fictional webshop for rainwear. Made
                with vanilla javascript, HTML and CSS. Integrated with Wordpress
                and wooCommerce API.
              </p>
            </div>
            <div className={styles.links}>
              <Link
                href="https://splendid-custard-e9a90d.netlify.app/"
                target="_blank"
                className={styles.link}
              >
                <span>Visit site</span>
              </Link>
              <Link
                href="https://github.com/kimrm/rainy-days-ca"
                target="_blank"
                className={styles.link}
              >
                <span>Github</span>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <Image
            src="/cosmu_site.png"
            alt="Next.js logo"
            width={200}
            height={200}
            className={styles.project_image}
          />
          <div className={styles.project_content}>
            <h3 className={styles.heading_3}>Community Science Museum</h3>
            <div className={styles.description}>
              <p>
                This was a semester project for a frontend developer course.
                It&apos;s a fictional website for a science museum. Made with
                vanilla javascript, HTML and CSS.
              </p>
            </div>
            <div className={styles.links}>
              <Link
                href="https://joyful-kheer-f14cfb.netlify.app/"
                target="_blank"
                className={styles.link}
              >
                <span>Visit site</span>
              </Link>
              <Link
                href="https://github.com/kimrm/cosmu"
                target="_blank"
                className={styles.link}
              >
                <span>Github</span>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <Image
            src="/movielist.png"
            alt="Next.js logo"
            width={200}
            height={200}
            className={styles.project_image}
          />
          <div className={styles.project_content}>
            <h3 className={styles.heading_3}>Movie List</h3>
            <div className={styles.description}>
              <p>
                This is a school project for a frontend developer course. The
                site fetches data the iMDB top 100 ranked movies API.
              </p>
            </div>
            <div className={styles.links}>
              <Link
                href="https://superb-hummingbird-948cfe.netlify.app/"
                target="_blank"
                className={styles.link}
              >
                <span>Visit site</span>
              </Link>
              <Link
                href="https://github.com/kimrm/movienight"
                target="_blank"
                className={styles.link}
              >
                <span>Github</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
