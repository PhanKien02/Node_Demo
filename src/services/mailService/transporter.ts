import nodemailer from 'nodemailer';
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "kien1st02@gmail.com",
    pass: "fhfvqgbdxbzbuhwo"
  }
});