import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/projects.module.css";

export default function ProjectItem({ project }) {
  return (
    <div className={styles.project}>
      <Image
        src={project.image}
        alt={project.title + " thumbnail"}
        width={400}
        height={400}
        className={styles.project_image}
      />
      <div className={styles.project_content}>
        <h3 className={styles.heading_3}>{project.title}</h3>
        <div className={styles.description}>
          <p>{project.description}</p>
        </div>
        <div className={styles.links}>
          {project.link ? (
            <Link href={project.link} target="_blank" className={styles.link}>
              <span>Visit site</span>
            </Link>
          ) : null}
          {project.github ? (
            <Link href={project.github} target="_blank" className={styles.link}>
              <span>Github</span>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
