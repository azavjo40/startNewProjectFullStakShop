const mailer = require("nodemailer");
const nodeMailer = (to, subject, text) => {
  return () => {
    const transport = mailer.createTransport({
      service: "gmail",
      auth: {
        user: "aochun19@gmail.com",
        pass: "ABC123ABC",
      },
    });
    const option = {
      from: "aochun19@gmail.com",
      to: to,
      subject: subject,
      text: text,
    };
    try {
      transport.sendMail(option);
    } catch (e) {
      console.log(e);
    }
  };
};

module.exports = nodeMailer;
