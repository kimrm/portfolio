import styles from "@/styles/page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className={styles.content_container}>
      <h1 className={styles.heading}>About me</h1>
      <div className={styles.flex_container}>
        <Image
          src="/profile.jpg"
          alt="Kim Rune Møller"
          width={200}
          height={200}
        />
        <div>
          <p className={styles.p_description}>
            I love coding, and it has been a big part of my life for as long as
            I can remember. Since I was a child I have been fascinated by the
            idea of creating something that others can use. I remember, back in
            the early 90s copying code from computer magazines on to my
            Commodore 64 and the thrill of seeing something happening on the
            screen.
          </p>
          <p className={styles.p_description}>
            In my late teens I got into web development with ASP classic
            VBscript on the backend, created databases in MS Access and
            frontends in HTML and CSS. Launched a self-made web shop with a
            friend selling computers and mobile phones and did freelance work
            for a few years , before I started digging into object oriented
            programming with .NET and Visual Basic.
          </p>
          <p className={styles.p_description}>
            Got hired by a company that made software for the car dealership
            market. They had developed software that ran on terminals in the
            dealerships and they wanted to modernize it and make a client that
            ran on Windows with a graphical user interface in stead of the 5250
            terminal interfaces. I learned a lot during the 16+ years I worked
            there, but at the same time it made me lose touch with the web
            development world which I loved so much. So in 2019 I decided to go
            back to my roots and started learning web development again, with
            more focus on frontend development. I discovered the joy of working
            with modern Javascript and the possibilities in modern CSS among the
            many frameworks and libraries that had popped up since I last worked
            with web development.
          </p>
          <p className={styles.p_description}>
            Now {"I'm"} mostly focused on React and Typescript, utilizing
            frameworks like Nextjs and Remix, but I still do some freelance
            VB.NET development now and then. I also love helping others and
            sharing my knowledge whenever I can.
          </p>
          <p className={styles.p_description}>
            {"I'm"} enthusiastic about design and is working on improving my
            design skills every chance I get. My design philosophy is about
            simplicity and following the best practices in UI/UX design. I
            believe that a good design is one that is intuitive and easy to use,
            and that it should be accessible to everyone.
          </p>
          <p className={styles.p_description}>
            My motivation for this website is to have a place where I can test
            out new ideas, and also showcase my work and share my thoughts and
            experiences with web development and programming in general. I also
            use this website to build my own library of tips and tricks that I
            can use in the future.
          </p>
          <p className={styles.p_description}>
            Please{" "}
            <Link href="/contact" scroll={true} className={styles.link}>
              contact me
            </Link>{" "}
            or visit my{" "}
            <a
              href="https://cv.kimrune.dev/?lang=en"
              target="_blank"
              className={styles.link}
            >
              online resume
            </a>{" "}
            if {"you're"} more curious about my professional background.
          </p>
        </div>
      </div>
    </div>
  );
}
