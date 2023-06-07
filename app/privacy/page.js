import Link from "next/link";

import styles from "@/styles/page.module.css";

export default function Privacy() {
  return (
    <main className={styles.main}>
      <article className={styles.privacy_article}>
        <h1>Privacy Disclosure for kimrune.dev</h1>
        <p>
          At kimrune.dev, I value your privacy and strive to maintain the
          highest standards of data protection. This privacy disclosure outlines
          how I collect, use, and protect any information you provide while
          using my website.
        </p>
        <ol>
          <li>
            <h2>Collection and Use of Information</h2>
            <p>
              I may collect certain information when you visit my website,
              including:
            </p>
            <ul>
              <li>
                <strong>Non-personally identifiable information:</strong> I use
                analytics tools to measure and analyze the usage of my website.
                This includes information such as your IP address, country,
                browser type, device type, and pages visited. This data helps me
                understand my website&apos;s performance and improve user
                experience.
              </li>
              <li>
                <strong>Cookies:</strong> My website may use cookies to enhance
                functionality and provide a personalized experience. These
                cookies may store information such as your preferences and
                settings. You have the option to disable cookies in your browser
                settings, but please note that this may impact certain features
                of my website.
              </li>
            </ul>
          </li>
          <li>
            <h2>Third-Party Services</h2>
            <p>
              I may use third-party services, such as analytics providers, that
              collect, monitor, and analyze website usage data on my behalf.
              These service providers have their own privacy policies governing
              the use of your information.
            </p>
          </li>
          <li>
            <h2>Data Security</h2>
            <p>
              I am committed to ensuring the security of your information. I
              implement appropriate technical and organizational measures to
              protect against unauthorized access, alteration, disclosure, or
              destruction of your personal data.
            </p>
          </li>
          <li>
            <h2>Data Retention</h2>
            <p>
              I retain your information only for as long as necessary to fulfill
              the purposes for which it was collected or as required by
              applicable laws and regulations.
            </p>
          </li>
          <li>
            <h2>Third-Party Websites</h2>
            <p>
              My website may contain links to external websites that are not
              operated by me. Please note that I have no control over the
              content and privacy practices of these websites. I encourage you
              to review their respective privacy policies before providing any
              personal information.
            </p>
          </li>
          <li>
            <h2>Updates to this Privacy Disclosure</h2>
            <p>
              I may update this privacy disclosure from time to time to reflect
              changes in my practices or legal obligations. I recommend checking
              this page periodically for any updates.
            </p>
          </li>
        </ol>
        <p>
          By using my website, you consent to the collection and use of your
          information as described in this privacy disclosure.
        </p>
        <p>
          If you have any questions or concerns about my privacy practices,
          please contact me at kim@kimrune.dev.
        </p>
        <p>Last updated: 2023/06/02</p>
        <Link className={styles.privacy_back_link} href="/">
          Go back to the homepage
        </Link>
      </article>
    </main>
  );
}
