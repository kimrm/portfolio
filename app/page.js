"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [themeImage, setThemeImage] = useState("/icons8-light-50.png");
  const [theme, setTheme] = useState();

  useEffect(() => {
    const savedTheme = localStorage.getItem("colorScheme");
    setTheme(savedTheme);

    document.documentElement.style.setProperty("color-scheme", theme);
    switch (theme) {
      case "dark":
        document.documentElement.style.setProperty("color-scheme", "light");
        setThemeImage("/icons8-dark-theme-50.png");
        break;
      case "light":
        document.documentElement.style.setProperty("color-scheme", "dark");
        setThemeImage("/icons8-light-50.png");
        break;
    }
  }, [theme]);

  function switchTheme() {
    switch (theme) {
      case "dark":
        saveTheme("light");
        break;
      case "light":
        saveTheme("dark");
        break;
    }
  }

  function saveTheme(colorScheme) {
    localStorage.setItem("colorScheme", colorScheme);
    setTheme(colorScheme);
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <button onClick={switchTheme} className={styles.theme_button}>
          <Image
            src={themeImage}
            alt="Light/Dark theme"
            width={24}
            height={24}
          />
        </button>
        <div className={styles.hero_heading}>
          <Image
            src="/gh_profile.png"
            alt="Kim Rune Møller"
            width={200}
            height={200}
            className={styles.profile_image}
          />
          <h1 className={styles.heading_1}>Hi! I&apos;m Kim</h1>
        </div>

        <div className={styles.description}>
          <p>
            A passionate developer specializing in PHP, JavaScript, HTML, and
            CSS. I have a deep love for design and constantly strive to create
            exceptional user experiences. Currently, I&apos;m trying to learn
            what makes a good design, while exploring modern Javascript
            frameworks like React and Next.js.
          </p>
        </div>
      </section>
      <section>
        <h2 className={styles.heading_2}>Latest projects</h2>
        <div className={styles.projects}>
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
                  This is a project I made for a frontend developer course.
                  It&apos;s a fictional webshop for rainwear.
                </p>
              </div>
              <div>
                <Link
                  href="https://splendid-custard-e9a90d.netlify.app/"
                  target="_blank"
                >
                  Visit site
                </Link>
                &nbsp;|&nbsp;
                <Link
                  href="https://joyful-kheer-f14cfb.netlify.app/"
                  target="_blank"
                >
                  Github
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
                  This is a semester project for a frontend developer course.
                  It&apos;s a fictional website for a science museum.
                </p>
              </div>
              <div>
                <Link
                  href="https://joyful-kheer-f14cfb.netlify.app/"
                  target="_blank"
                >
                  Visit site
                </Link>
                &nbsp;|&nbsp;
                <Link
                  href="https://joyful-kheer-f14cfb.netlify.app/"
                  target="_blank"
                >
                  Github
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
                  This is a project exam for a frontend developer course.
                  It&apos;s a food blog.
                </p>
              </div>
              <div>
                <Link
                  href="https://astounding-jalebi-1c1cf5.netlify.app/"
                  target="_blank"
                >
                  Visit site
                </Link>
                &nbsp;|&nbsp;
                <Link
                  href="https://joyful-kheer-f14cfb.netlify.app/"
                  target="_blank"
                >
                  Github
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.social_links}>
          <Link href="https://www.linkedin.com/in/kim-rune-m%C3%B8ller-32523394">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="48px"
              height="48px"
            >
              <path d="M40.227,12C51.145,12,52,12.854,52,23.773v16.453C52,51.145,51.145,52,40.227,52H23.773C12.855,52,12,51.145,12,40.227	V23.773C12,12.854,12.855,12,23.773,12H40.227z M25.029,43V26.728h-5.057V43H25.029z M22.501,24.401	c1.625,0,2.947-1.322,2.947-2.949c0-1.625-1.322-2.947-2.947-2.947c-1.629,0-2.949,1.32-2.949,2.947S20.87,24.401,22.501,24.401z M44,43v-8.925c0-4.382-0.946-7.752-6.067-7.752c-2.46,0-4.109,1.349-4.785,2.628H33.08v-2.223h-4.851V43h5.054v-8.05	c0-2.122,0.405-4.178,3.036-4.178c2.594,0,2.628,2.427,2.628,4.315V43H44z" />
            </svg>
          </Link>
          <Link href="http://github.com/kimrm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48px"
              height="48px"
            >
              <path d="M 12 2 C 6.476563 2 2 6.476563 2 12 C 2 17.523438 6.476563 22 12 22 C 17.523438 22 22 17.523438 22 12 C 22 6.476563 17.523438 2 12 2 Z M 12 4 C 16.410156 4 20 7.589844 20 12 C 20 12.46875 19.953125 12.929688 19.875 13.375 C 19.628906 13.320313 19.265625 13.253906 18.84375 13.25 C 18.53125 13.246094 18.140625 13.296875 17.8125 13.34375 C 17.925781 12.996094 18 12.613281 18 12.21875 C 18 11.257813 17.53125 10.363281 16.78125 9.625 C 16.988281 8.855469 17.191406 7.535156 16.65625 7 C 15.074219 7 14.199219 8.128906 14.15625 8.1875 C 13.667969 8.070313 13.164063 8 12.625 8 C 11.933594 8 11.273438 8.125 10.65625 8.3125 L 10.84375 8.15625 C 10.84375 8.15625 9.964844 6.9375 8.34375 6.9375 C 7.777344 7.507813 8.035156 8.953125 8.25 9.6875 C 7.484375 10.417969 7 11.28125 7 12.21875 C 7 12.546875 7.078125 12.859375 7.15625 13.15625 C 6.878906 13.125 5.878906 13.03125 5.46875 13.03125 C 5.105469 13.03125 4.542969 13.117188 4.09375 13.21875 C 4.03125 12.820313 4 12.414063 4 12 C 4 7.589844 7.589844 4 12 4 Z M 5.46875 13.28125 C 5.863281 13.28125 7.0625 13.421875 7.21875 13.4375 C 7.238281 13.492188 7.257813 13.542969 7.28125 13.59375 C 6.851563 13.554688 6.019531 13.496094 5.46875 13.5625 C 5.101563 13.605469 4.632813 13.738281 4.21875 13.84375 C 4.1875 13.71875 4.148438 13.597656 4.125 13.46875 C 4.5625 13.375 5.136719 13.28125 5.46875 13.28125 Z M 18.84375 13.5 C 19.242188 13.503906 19.605469 13.570313 19.84375 13.625 C 19.832031 13.691406 19.796875 13.746094 19.78125 13.8125 C 19.527344 13.753906 19.109375 13.667969 18.625 13.65625 C 18.390625 13.652344 18.015625 13.664063 17.6875 13.6875 C 17.703125 13.65625 17.707031 13.625 17.71875 13.59375 C 18.058594 13.546875 18.492188 13.496094 18.84375 13.5 Z M 6.09375 13.78125 C 6.65625 13.785156 7.183594 13.824219 7.40625 13.84375 C 7.929688 14.820313 8.988281 15.542969 10.625 15.84375 C 10.222656 16.066406 9.863281 16.378906 9.59375 16.75 C 9.359375 16.769531 9.113281 16.78125 8.875 16.78125 C 8.179688 16.78125 7.746094 16.160156 7.375 15.625 C 7 15.089844 6.539063 15.03125 6.28125 15 C 6.019531 14.96875 5.929688 15.117188 6.0625 15.21875 C 6.824219 15.804688 7.097656 16.5 7.40625 17.125 C 7.683594 17.6875 8.265625 18 8.90625 18 L 9.03125 18 C 9.011719 18.109375 9 18.210938 9 18.3125 L 9 19.40625 C 6.691406 18.472656 4.933594 16.5 4.28125 14.0625 C 4.691406 13.960938 5.152344 13.855469 5.5 13.8125 C 5.660156 13.792969 5.863281 13.777344 6.09375 13.78125 Z M 18.625 13.90625 C 19.074219 13.917969 19.472656 14.003906 19.71875 14.0625 C 19.167969 16.132813 17.808594 17.855469 16 18.90625 L 16 18.3125 C 16 17.460938 15.328125 16.367188 14.375 15.84375 C 15.957031 15.554688 16.988281 14.863281 17.53125 13.9375 C 17.910156 13.910156 18.355469 13.898438 18.625 13.90625 Z M 12.5 18 C 12.773438 18 13 18.226563 13 18.5 L 13 19.9375 C 12.671875 19.980469 12.339844 20 12 20 L 12 18.5 C 12 18.226563 12.226563 18 12.5 18 Z M 10.5 19 C 10.773438 19 11 19.226563 11 19.5 L 11 19.9375 C 10.664063 19.894531 10.324219 19.832031 10 19.75 L 10 19.5 C 10 19.226563 10.226563 19 10.5 19 Z M 14.5 19 C 14.742188 19 14.953125 19.175781 15 19.40625 C 14.675781 19.539063 14.34375 19.660156 14 19.75 L 14 19.5 C 14 19.226563 14.226563 19 14.5 19 Z" />
            </svg>
          </Link>
        </div>
        <div className={styles.icons_copyright}>
          Icons by{" "}
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </div>
      </section>
    </main>
  );
}
