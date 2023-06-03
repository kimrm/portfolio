"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

export default function ContactForm() {
  const [buttonState, setButtonState] = useState(styles.contact_button);
  const [buttonIconState, setButtonIconState] = useState(
    styles.contact_send_icon
  );
  const [buttonTextState, setButtonTextState] = useState("Send message");
  const [buttonTextStyleState, setButtonTextStyleState] = useState(
    styles.contact_send_text
  );

  async function sendForm(event) {
    event.preventDefault();
    const body = {
      form_name: event.target.name.value,
      form_email: event.target.email.value,
      form_message: event.target.message.value,
    };
    setButtonState(styles.contact_button + " " + styles.disabled);
    setButtonIconState(styles.contact_send_icon + " " + styles.active);
    setButtonTextState("Sending...");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (data && data.status === "Success") {
      setTimeout(() => {
        setButtonTextState("Message sent!");
        setButtonIconState(styles.contact_send_icon);
        event.target.name.value = "";
        event.target.email.value = "";
        event.target.message.value = "";
        setTimeout(() => {
          setButtonTextState("Send message");
          setButtonState(styles.contact_button);
        }, 3000);
      }, 3000);
    } else {
      setTimeout(() => {
        setButtonTextState("Sending failed!");
        setButtonIconState(styles.contact_send_icon);
        setTimeout(() => {
          setButtonTextState("Send message");
          setButtonState(styles.contact_button);
        }, 3000);
      }, 3000);
    }
  }
  return (
    <form action={sendForm} onSubmit={sendForm}>
      <div className={styles.form_field}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className={styles.form_field}>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className={styles.form_field}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5"></textarea>
      </div>
      <button type="submit" className={buttonState}>
        <div>
          <span className={buttonTextStyleState}>{buttonTextState}</span>
          <Image
            src="/icons8-send-mail-25-white.png"
            alt="Send message"
            width={25}
            height={25}
            className={buttonIconState}
          />
        </div>
      </button>
    </form>
  );
}
