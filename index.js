require('dotenv').config()
const nodemailer = require('nodemailer');
const emails = require('./emails.json');

async function main() {
    for (let i = 0; i <= 500; i++) {
        const email = emails[i]
        console.log(email)
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            pool: true, // This is the field you need to add
            auth: {
                user: process.env.GMAIL_EMAIL,
                pass: process.env.GMAIL_APP_PASSWORD
            },
        });

        let mailOptions = {
            from: process.env.GMAIL_EMAIL, // sender address
            to: email, // list of receivers
            subject: process.env.EMAIL_SUBJECT, // Subject line
            text: 'Hello World', // plain text body
            html: '<h1>Hello World</h1>', // html body
            // attachments: []
        };

        try {
            let info = await transporter.sendMail(mailOptions);
            console.log({ message: 'Email sent successfully' });
        } catch (error) {
            console.log(error);
            console.log({ error: 'Error sending email' });
        }
    }
}

main();