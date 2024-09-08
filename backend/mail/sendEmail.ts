import nodemailer from "nodemailer";
import dotenv from "dotenv";
import {
  sendVerificationEmail as sendVerificationEmailTemplate,
  welcomeEmail,
} from "./emailTemplate";
import { transporter } from "./mail";
dotenv.config();

const sendVerificationEmail = async (email: string, verificationToken: any) => {
  // mail of the recipient
  const recipient = email;
  try {
    // made a mailOptions object to send the email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipient,
      subject: "Verification Email",
      html: sendVerificationEmailTemplate.replace(
        "{verificationCode}",
        verificationToken,
      ),
      category: "Email Verification",
    };

    // send the email
    const info = await transporter.sendMail(mailOptions);
    // remove me
    console.log("Email sent: " + info.response);
  } catch (error) {
    // remove me
    console.error("Error sending verification email: ", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

const sendWelcomeEmail = async (email: string, name: string) => {
  const recipient = email;
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipient,
      subject: "Welcome to our platform",
      html: welcomeEmail.replace("{Username}", name),
    };

    // send the email
    const info = await transporter.sendMail(mailOptions);

    // remove me
    console.log("Welcome email send successfully", info);
  } catch (error) {
    // remove me
    console.error("Error sending welcome email: ", error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export { sendVerificationEmail, sendWelcomeEmail };
