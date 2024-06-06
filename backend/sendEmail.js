const nodemailer=require("nodemailer")
require("dotenv").config()

const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER,
      pass:  process.env.APP_PASSWORD,
    },
  });
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: "mekibibatlaw219@gmail.com", // sender address
      to: process.env.USER, // list of receivers
      subject: "user", // Subject line
      text: "Hello world?", // plain text body
    });
    console.log("Message sent: %s", info.messageId);
  }
  
  main().catch(console.error);