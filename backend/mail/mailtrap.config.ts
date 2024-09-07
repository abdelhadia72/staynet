import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN!;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT!;

const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Joma",
};

const recipients = [
  {
    email: process.env.MAILTRAP_RECIPIENT_EMAIL!,
  },
];

const emailData = {
  from: sender,
  to: recipients,
  subject: "Email Verification Code",
  text: `Your verification code is: 435 837`,
  category: "Verification",
};

axios
  .post(`${ENDPOINT}/api/send`, emailData, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
