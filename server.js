const cors = require("cors");
const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

//server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "aditria.pardana20@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `
            <p>Name: ${name}</p>
            <p>Phone: ${phone}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
        `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
