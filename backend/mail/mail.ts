import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// create a transporter object to send emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const confirmationCode = Math.floor(100000 + Math.random() * 900000).toString();

// template for the email to be sent
const mailOptions: nodemailer.SendMailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_RECIPIENT,
  subject: "email Confirmation",
  text: `Your confirmation code is: ${confirmationCode}`,
  html: `<h1>Your confirmation code is: ${confirmationCode}</h1>`,
  headers: {
    Importance: "high",
    "X-Priority": "1",
    "X-MSMail-Priority": "High",
    Flag: "Urgent",
  },
  // to make it high priority (important)
  priority: "high",
};

// send the email using the transporter object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error sending email: ", error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

// more info about setup: (WARNING: it's better to use OAuth2 for production)
// https://medium.com/@y.mehnati_49486/how-to-send-an-email-from-your-gmail-account-with-nodemailer-837bf09a7628
