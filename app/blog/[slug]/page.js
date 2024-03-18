import styles from "@/styles/page.module.css";
import bs from "@/styles/blog.module.css";
import { getPostData } from "@/lib/posts";
import md from "markdown-it";
import Link from "next/link";

export async function getInitialProps({ query }) {
  const postData = await getPostData(query.slug);
  return { postData };
}

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

export default function Page({ params }) {
  const { data, content } = getPostData(params.slug);
  return (
    <div className={bs.post}>
      <div className={bs.breadcrumb}>
        <Link href="/blog">blog</Link>/{params.slug}
      </div>
      <h1 className={styles.heading}>{data.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: md({ typographer: false, breaks: true }).render(content),
        }}
      />
    </div>
  );
}
