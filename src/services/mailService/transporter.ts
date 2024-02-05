import nodemailer from 'nodemailer';
console.log("XXX", process.env.MAIL_SENDER);
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "kien1st02@gmail.com",
    pass: "fhfvqgbdxbzbuhwo"
  }
});