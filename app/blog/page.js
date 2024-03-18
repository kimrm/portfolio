import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";
import styles from "@/styles/page.module.css";
import bs from "@/styles/blog.module.css";

export async function getData() {
  const allPostsData = getSortedPostsData();
  return allPostsData;
}

export default async function page() {
  const posts = await getData();
  return (
    <div className={styles.content_container}>
      <h1 className={styles.heading}>Blog</h1>
      <p className={styles.p_description}>
        Welcome to my blog. Here you can read about my thoughts and experiences
        with web development and programming in general. I also use this blog to
        build my own library of tips and tricks that I can use in the future.
      </p>
      <ul className={bs.list}>
        {posts.map(({ id, date, title, excerpt }) => (
          <li key={id}>
            {date}
            <Link href={`/blog/${id}`} className={bs.title}>
              <h2>{title}</h2>
            </Link>
            <p className={styles.p_description}>{excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
