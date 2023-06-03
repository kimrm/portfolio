import { NextResponse } from "next/server";

export async function GET(request) {
  const body = await request.json();
  const res = { message: `Hello ${body} from the API!?` };

  return NextResponse.json(res);
}

export async function POST(request) {
  const body = await request.json();
  const form_name = body.form_name;
  const form_email = body.form_email;
  const form_message = body.form_message;

  let res = { status: "Success", message: "No message" };
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GMAIL_APP_USR,
      pass: process.env.GMAIL_APP_PSW,
    },
    secure: true,
  });
  const mailData = {
    from: "kimrmoller@gmail.com",
    to: "kim@kimrune.dev",
    subject: `Message From ${form_name}`,
    text: form_message + " | Sent from: " + form_name + " [" + form_email + "]",
    html: `<div>${form_message}</div><p>Sent from:
     ${form_name} [${form_email}]</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res = { status: "Error", message: info };
    } else {
      res = { status: "Success", message: info };
    }
  });

  return NextResponse.json(res);
}
