const express=require('express')
const sgMail=require('@sendgrid/mail')
const app=express();
const sendgrid_key="SG.EPCyKzFZT6yUHXzuxdU4tQ.d60AWJbSwkMAplANUtfVx47t9TFLSLMvQzmN4tYEuM"

sgMail.setApiKey(sendgrid_key)
sgMail.send({
    to:'a'
})

app.use(express.json())
// app.use()



"use strict";
const nodemailer = require("nodemailer");


async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: amitrajput.chauhan@gmail.com, // generated ethereal user
      pass: Mynameis@123, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Amit 👻" <amitrajput.chauhan@gmail.com>', // sender address
    to: "amitrajput.chauhan@gmail.com ", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);










app.listen('5000',()=>{
    console.log('server listening at port 5000');
})