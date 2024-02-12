import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/page.module.css";
import ContactForm from "@/components/contactForm";
import Projects from "@/components/projects";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
