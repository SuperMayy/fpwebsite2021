const express = require('express');

const router = express.Router();

//Test API
router.get('/user', (req, res) => {
    const data = {
        username: 'John doe',
        age: 5
    };
    res.json(data);
});

//Actual Routes
//Send Route for Contact Form
router.post('/sent', (req, res) => {
    //send email here
    console.log('Body: ', JSON.stringify(req.body));
    const output = `
      <p>Record of message sent at Club Site</p>
      <h3>Booking Details</h3>
      <ul>
        <li>Name: ${req.body.fullname}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Additional Message</h3>
      <p>${req.body.emailBody}</p>
    `;
  
    //Node mailer code
    let transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secureConnection: false, // TLS requires secureConnection to be false
      auth: {
          user: process.env.EMAIL, // like : abc@gmail.com
          pass: process.env.PASSWORD           // like : pass@123
      },
      tls: {
        ciphers:'SSLv3'
      }
      });
      
      let mailOptions = {
        from: '"Fionita\'s Project Site Message" <testerformreciver9920@outlook.com>', // sender address
        to: `testerformreciver9920@outlook.com`, // list of receivers
        subject: "Fionita\'s Project Contact Form Message", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
           return console.log(error);
        } else {
          console.log('success');
          res.render('contact', {mg:'Message has been sent'});
        }
      }); 
  });
  


module.exports = router;