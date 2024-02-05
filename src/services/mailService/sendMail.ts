import { StatusCodes } from "http-status-codes";
import { ApiError } from "../../utils/apiError";
import { transporter } from "./transporter";
export const sendmail = async (to: string, subject: string, html: string) => {
  await transporter.sendMail({
    to: to, // list of receivers
    from: process.env.MAIL_SENDER, // sender address
    subject: subject, // Subject line
    html: html, // HTML body content
  }).then(() => {
    console.log("send mail success");
  })
    .catch((error) => {
      console.log(error);
      throw new ApiError(StatusCodes.BAD_REQUEST, "send mail failed")
    });
}
