import React from "react";
import styles from "@/styles/page.module.css";

function Footer(props) {
  return (
    <footer>
      <h4>&copy; {new Date().getFullYear()} - kimrune.dev</h4>
    </footer>
  );
}

export default Footer;
