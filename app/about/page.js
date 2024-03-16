import styles from "@/styles/page.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={styles.content_container}>
      <h1 className={styles.heading}>About me</h1>
      <div style={{ display: "flex" }}>
        <Image
          src="/profile.jpg"
          alt="Kim Rune Møller"
          width={200}
          height={200}
          style={{ marginInlineEnd: "2rem" }}
        />
        <div>
          <p className={styles.p_description}>
            I love coding. Since I was a child I have been fascinated by the
            idea of creating something that others can use. I remember, back in
            the 80-s and 90-s copying code from computer magazines on to my
            Commodore 64 and the joy of seeing something happening on the
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
            Now I'm mostly focused on React and Typescript, utilizing frameworks
            like Nextjs and Remix, but I still do some freelance VB.NET
            development, creating native Windows software for the car dealership
            market. I also love helping others and sharing my knowledge.
          </p>
          <p className={styles.p_description}>
            I'm also enthusiastic about design and is working on improving my
            skills every chance I get.
          </p>
        </div>
      </div>
    </div>
  );
}
