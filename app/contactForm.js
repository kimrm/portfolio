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
  const [nameValidationStyle, setNameValidationStyle] = useState(
    styles.validation_error
  );
  const [emailValidationStyle, setEmailValidationStyle] = useState(
    styles.validation_error
  );
  const [messageValidationStyle, setMessageValidationStyle] = useState(
    styles.validation_error
  );

  async function sendForm(event) {
    event.preventDefault();
    let validated = true;
    if (event.target.name.value === "") {
      setNameValidationStyle(styles.validation_error + " " + styles.show);
      validated = false;
    } else {
      setNameValidationStyle(styles.validation_error);
    }
    if (event.target.email.value === "") {
      setEmailValidationStyle(styles.validation_error + " " + styles.show);
      validated = false;
    } else {
      setEmailValidationStyle(styles.validation_error);
    }
    if (event.target.message.value === "") {
      setMessageValidationStyle(styles.validation_error + " " + styles.show);
      validated = false;
    } else {
      setMessageValidationStyle(styles.validation_error);
    }

    if (!validated) {
      return;
    }

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
    <form action="" onSubmit={sendForm}>
      <div className={styles.form_field}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="name" />
        <span className={nameValidationStyle}>
          Please write your name &#128522;
        </span>
      </div>
      <div className={styles.form_field}>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" name="email" />
        <span className={emailValidationStyle}>
          Please write your email &#128522;
        </span>
      </div>
      <div className={styles.form_field}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5"></textarea>
        <span className={messageValidationStyle}>
          You have not written any message &#128522;
        </span>
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
