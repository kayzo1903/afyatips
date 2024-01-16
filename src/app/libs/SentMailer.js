import nodemailer from "nodemailer";

export async function sentMailer({ subject , html }) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testresult = await transport.verify();
  } catch (error) {
    console.log(error);
    return;
  }
  try {
    const sendresult = await transport.sendMail({
      to : SMTP_EMAIL,
      from : SMTP_EMAIL ,
      html,
      subject ,
    });
  } catch (error) {
    console.log(error);
  }
}
