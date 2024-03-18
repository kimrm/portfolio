import ProjectItem from "./projectItem";
import styles from "@/styles/projects.module.css";
import Link from "next/link";

export default function ProjectsPreview() {
  const projects = [
    {
      title: "Info-screen for conference and meeting rooms.",
      description:
        "I'm currently working on a project for a client where I'm building a web app for displaying information on screens in conference and meeting rooms. The app is built with Remix and Typescript and is integrated with Google Calendar. More information will be available soon.",
      image: "/rombooking.png",
      link: "",
      github: "",
      isShowcase: true,
    },
    {
      title: "E-commerce site",
      description:
        "React demo e-commerce site, built with Vite and Typescript. It utilizes React Router, Zustand for state management, and Styled components for styling. Framer Motion is used for animations. The site is deployed on Netlify.",
      image: "/ecommerce.jpg",
      link: "https://sweet-treacle-b48080.netlify.app/",
      github: "https://github.com/kimrm/e-commerce-course-assignment",
      isShowcase: true,
    },
    {
      title: "Auction House",
      description:
        "Vanilla Javascript demo auction site. It's built with Vite and uses Tailwind CSS for styling. The site is deployed on Netlify.",
      image: "/auction_house.png",
      link: "https://cute-blancmange-efcb8b.netlify.app/",
      github: "https://github.com/kimrm/auction-house",
      isShowcase: true,
    },
    {
      title: "My CV page",
      description:
        "This is a page I made for my CV. It's made with React and Tailwind CSS.",
      image: "/cv.png",
      link: "https://cv.kimrune.dev",
      github: "https://github.com/kimrm/resume",
      isShowcase: false,
    },
    {
      title: "Kunnskaps- og Næringsparken Senja Website",
      description:
        "Freelance project for a local building housing several businesses. It's a custom made Wordpress theme with custom fields og posts. Styling is done with Bootstrap.",
      image: "/knpsenja.png",
      link: "https://knpsenja.no",
      github: "",
      isShowcase: true,
    },
    {
      title: "Portfolio (this webpage)",
      description: "Portfolio website made with React/Next.js",
      image: "/portfolio.png",
      link: "",
      github: "https://github.com/kimrm/portfolio",
      isShowcase: false,
    },
    {
      title: "Social Media Client",
      description:
        "This is a school project for a frontend developer course. It's a fictional social media client. Made with Vanilla JS, HTML and CSS.",
      image: "/social_app.png",
      link: "",
      github: "https://github.com/kimrm/JS2-CA",
      isShowcase: false,
    },
    {
      title: "Møllers Kitchen Food blog",
      description:
        "Food blog made with vanilla javascript, HTML and CSS. Content is served from a headless Wordpress installation. This project was a project exam for a frontend developer course.",
      image: "/foodblog.png",
      link: "https://astounding-jalebi-1c1cf5.netlify.app/",
      github: "https://github.com/kimrm/foodblog",
      isShowcase: false,
    },
    {
      title: "Rainy Days",
      description:
        "This is a project I made for a frontend developer course assignment. It's a fictional webshop for rainwear. Made with vanilla javascript, HTML and CSS. Integrated with Wordpress and wooCommerce API.",
      image: "/rainy_days.png",
      link: "https://splendid-custard-e9a90d.netlify.app/",
      github: "https://github.com/kimrm/rainy-days-ca",
      isShowcase: false,
    },
    {
      title: "Community Science Museum",
      description:
        "This was a semester project for a frontend developer course. It's a fictional website for a science museum. Made with vanilla javascript, HTML and CSS.",
      image: "/cosmu_site.png",
      link: "https://joyful-kheer-f14cfb.netlify.app/",
      github: "https://github.com/kimrm/cosmu",
      isShowcase: false,
    },
    {
      title: "Movie List",
      description:
        "This is a school project for a frontend developer course. The site fetches data from the iMDB top 100 ranked movies API.",
      image: "/movielist.png",
      link: "https://superb-hummingbird-948cfe.netlify.app/",
      github: "https://github.com/kimrm/movienight",
      isShowcase: false,
    },
  ];

  return (
    <section>
      <div className={styles.projects_section}>
        <h2 className={styles.heading_2}>Some things I'm working on</h2>
        <div className={styles.projects}>
          {projects.map(
            (project, index) =>
              project.isShowcase && (
                <ProjectItem key={index} project={project} />
              )
          )}
        </div>
      </div>
      <Link href="/projects">See more projects</Link>
    </section>
  );
}
