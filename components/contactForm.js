"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/styles/page.module.css";

export default function ContactForm() {
  const [formState, setFormState] = useState("pending");
  const [formValidationState, setFormValidationState] = useState({
    name: true,
    email: true,
    message: true,
  });
  const [buttonStyle, setButtonStyle] = useState(styles.contact_button);
  const [buttonIconStyle, setButtonIconStyle] = useState(
    styles.contact_send_icon
  );
  const [buttonText, setButtonText] = useState("Send message");
  const [nameValidationStyle, setNameValidationStyle] = useState(
    styles.validation_error
  );
  const [emailValidationStyle, setEmailValidationStyle] = useState(
    styles.validation_error
  );
  const [messageValidationStyle, setMessageValidationStyle] = useState(
    styles.validation_error
  );

  useEffect(() => {
    if (formValidationState.name === false) {
      setNameValidationStyle(styles.validation_error + " " + styles.show);
    } else {
      setNameValidationStyle(styles.validation_error);
    }
    if (formValidationState.email === false) {
      setEmailValidationStyle(styles.validation_error + " " + styles.show);
    } else {
      setEmailValidationStyle(styles.validation_error);
    }
    if (formValidationState.message === false) {
      setMessageValidationStyle(styles.validation_error + " " + styles.show);
    } else {
      setMessageValidationStyle(styles.validation_error);
    }
  }, [formValidationState]);

  useEffect(() => {
    switch (formState) {
      case "pending":
        setButtonStyle(styles.contact_button);
        setButtonIconStyle(styles.contact_send_icon);
        setButtonText("Send message");
        break;
      case "sending":
        setButtonStyle(styles.contact_button + " " + styles.disabled);
        setButtonIconStyle(styles.contact_send_icon + " " + styles.active);
        setButtonText("Sending...");
        break;
      case "success":
        setButtonStyle(styles.contact_button + " " + styles.success);
        setButtonIconStyle(styles.contact_send_icon);
        setButtonText("Message sent!");
        break;
      case "error":
        setButtonStyle(styles.contact_button + " " + styles.success);
        setButtonIconStyle(styles.contact_send_icon);
        setButtonText("Sending failed!");
        console.log("Error");
        break;
    }
  }, [formState]);

  async function sendForm(event) {
    event.preventDefault();

    let nameValid = false;
    let emailValid = false;
    let messageValid = false;

    if (event.target.name.value === "") {
      nameValid = false;
    } else {
      nameValid = true;
    }
    if (event.target.email.value === "") {
      emailValid = false;
    } else {
      emailValid = true;
    }
    if (event.target.message.value === "") {
      messageValid = false;
    } else {
      messageValid = true;
    }

    setFormValidationState({
      name: nameValid,
      email: emailValid,
      message: messageValid,
    });

    if (nameValid === false || emailValid === false || messageValid === false) {
      return;
    }

    const body = {
      form_name: event.target.name.value,
      form_email: event.target.email.value,
      form_message: event.target.message.value,
    };
    setFormState("sending");
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
        setFormState("success");
        event.target.name.value = "";
        event.target.email.value = "";
        event.target.message.value = "";
        setTimeout(() => {
          setFormState("pending");
        }, 3000);
      }, 1000);
    } else {
      setTimeout(() => {
        setFormState("error");
        setTimeout(() => {
          setFormState("pending");
        }, 1000);
      }, 1000);
    }
  }
  return (
    <form onSubmit={sendForm}>
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
      <button type="submit" className={buttonStyle}>
        <span>{buttonText}</span>
        <Image
          src="/icons8-send-mail-25-white.png"
          alt="Send message"
          width={25}
          height={25}
          className={buttonIconStyle}
        />
      </button>
    </form>
  );
}
