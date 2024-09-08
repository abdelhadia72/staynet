import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { sendVerificationEmail as sendVerificationEmailTemplate } from "./emailTemplate";
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
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending verification email: ", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export default sendVerificationEmail;
