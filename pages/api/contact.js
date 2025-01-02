const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});


export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' });
  }
  try {
    const { name, email, subject, message } = JSON.parse(req.body);

    const mailOptions = {
      from: email,
      to: 'druxambsite@gmail.com',
      subject: `Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Failed' });
  }
};
