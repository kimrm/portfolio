import styles from "@/styles/page.module.css";
import Projects from "@/components/projects";

export default function page() {
  return (
    <div className={styles.content_container}>
      <h1 className={styles.heading}>Projects Showcase</h1>
      <p className={styles.p_description}>
        Have a peek on the projects and stuff I am working on. This is not all
        the projects I have worked on, some are not listed here because their
        code is not public or they are internal business systems not open for
        the public to view.
      </p>
      <Projects />
    </div>
  );
}
