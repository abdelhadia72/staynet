import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// create a transporter object to send emails
export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// more info about setup: (WARNING: it's better to use OAuth2 for production)
// https://medium.com/@y.mehnati_49486/how-to-send-an-email-from-your-gmail-account-with-nodemailer-837bf09a7628
