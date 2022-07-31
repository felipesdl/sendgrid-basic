require("dotenv/config");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.APIKEY);

const message = {
  // para enviar para vários emails
  // to:[email@email.com.br, email2@email.com.br, email3@email.com.br]
  to: "email@email.com.br",
  // para enviar com nome
  from: {
    name: "Meu nome",
    email: "emailautenticado@email.com.br",
  },
  // from: "emailautenticado@email.com.br",
  subject: "Hello from sendgrid",
  text: "Hello from sendgrid on Vscode",
  html: "<h1>Hello from sendgrid on Vscode</h1>",
};

sgMail
  .send(message)
  .then((response) => console.log("Email sent"))
  .catch((error) => console.log(error.message));
