const mailer = require("nodemailer");
const nodeMailer = (subject, text) => {
  const transport = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "pabek92@gmail.com",
      pass: "1111111",
    },
  });
  const option = {
    from: "Client",
    to: "pabek92@gmail.com",
    subject: subject,
    text: text,
  };
  try {
    transport.sendMail(option);
  } catch (e) {
    console.log(e);
  }
};

module.exports = nodeMailer;
