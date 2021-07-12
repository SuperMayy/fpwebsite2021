const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);

//Routes

//Send Route for Contact Form
router.post('/sent', (req, res) => {
  //send email here
  console.log('Body: ', req.body);
  const output = `
    <p>Record of message sent at FP Main Website</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Full name: ${req.body.fullname}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Rason for Contacting</h3>
    <p>${req.body.reason}</p>
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
      from: '"Fionita\'s Project" <testerformreciver9920@outlook.com>', // sender address
      to: `testerformreciver9920@outlook.com`, // list of receivers
      subject: "Fionita\'s Project Website Contact Form Message", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         return console.log(error);
      }
    console.log('success');
    }); 
});

//Payment routes
//Stripe
router.post('/create-checkout-session', async (req, res) => {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log('Donation: ', JSON.stringify(req.body));
  const donation = req.body.amount*100;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: 'Donation',
          },
          unit_amount: donation,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://www.google.com/',
    cancel_url: 'https://www.youtube.com/',
  });

  res.send({
    retStatus : 303,
    redirectTo: session.url,
    msg : 'sent' 
  });
});


module.exports = router;