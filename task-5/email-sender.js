const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
dotenv.config()
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD
    }
});

const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'sending email using node js',
    text: 'woy pa kabar coyy ?'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`email sent: ${info.response}`)
    }
});