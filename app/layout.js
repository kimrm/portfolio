import "@/styles/globals.css";
import styles from "@/styles/page.module.css";
import { Inter, Oswald, Merriweather_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata = {
  title: "kimrune.dev",
  description: "Developer from Norway creating engaging web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${merriweather.variable}`}
    >
      <body>
        <div className={styles.container}>
          <Header />
          <main className={styles.main}>{children}</main>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
