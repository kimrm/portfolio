import ProjectItem from "./projectItem";
import styles from "@/styles/projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Kunnskaps- og Næringsparken Senja Website",
      description:
        "This is a website I made for a local building housing several businesses. It's a custom made Wordpress theme with custom fields og posts. Styling is done with Bootstrap.",
      image: "/knpsenja.png",
      link: "https://knpsenja.no",
      github: "",
    },
    {
      title: "Portfolio (this webpage)",
      description: "Portfolio website made with React/Next.js",
      image: "/portfolio.png",
      link: "",
      github: "https://github.com/kimrm/portfolio",
    },
    {
      title: "Social Media Client",
      description:
        "This is a school project for a frontend developer course. It's a fictional social media client. Made with Vanilla JS, HTML and CSS.",
      image: "/social_app.png",
      link: "",
      github: "https://github.com/kimrm/JS2-CA",
    },
    {
      title: "Møllers Kitchen Food blog",
      description:
        "Food blog made with vanilla javascript, HTML and CSS. Content is served from a headless Wordpress installation. This project was a project exam for a frontend developer course.",
      image: "/foodblog.png",
      link: "https://astounding-jalebi-1c1cf5.netlify.app/",
      github: "https://github.com/kimrm/foodblog",
    },
    {
      title: "Rainy Days",
      description:
        "This is a project I made for a frontend developer course assignment. It's a fictional webshop for rainwear. Made with vanilla javascript, HTML and CSS. Integrated with Wordpress and wooCommerce API.",
      image: "/rainy_days.png",
      link: "https://splendid-custard-e9a90d.netlify.app/",
      github: "https://github.com/kimrm/rainy-days-ca",
    },
    {
      title: "Community Science Museum",
      description:
        "This was a semester project for a frontend developer course. It's a fictional website for a science museum. Made with vanilla javascript, HTML and CSS.",
      image: "/cosmu_site.png",
      link: "https://joyful-kheer-f14cfb.netlify.app/",
      github: "https://github.com/kimrm/cosmu",
    },
    {
      title: "Movie List",
      description:
        "This is a school project for a frontend developer course. The site fetches data the iMDB top 100 ranked movies API.",
      image: "/movielist.png",
      link: "https://superb-hummingbird-948cfe.netlify.app/",
      github: "https://github.com/kimrm/movienight",
    },
  ];

  return (
    <div className={styles.projects_section}>
      <h2 className={styles.heading_2}>My Latest projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
