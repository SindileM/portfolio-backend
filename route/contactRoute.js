const express = require('express');
const app = express.Router();
const nodemailer = require('nodemailer');
const { text } = require('stream/consumers');

app.post('/',(req, res) => {
    let {name,email,contact,message}=req.body
    const nodemailer = require('nodemailer');
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: "stmp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env. EMAIL,
            pass: process.env. PASS
        }
    });
    const mailOptions = {
        from: email,
        to: 'smakhathini24@gmail.com',
        subject:'new contact from portfolio',
        text: `${name} has contacted you 
        
        please contact them back on ${contact}
        ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(400).send({msg: 'Email not sent'});
        }else {
            console.log('Email sent: ' + info.response);
            res.send({msg: 'Email has been sent successfully'});
        }
    });
});

module.exports = app

