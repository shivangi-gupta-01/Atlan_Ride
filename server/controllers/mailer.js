import nodemailer from 'nodemailer';

// Configure the transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', 
  port: 587, 
  secure: false, 
  auth: {
    user: "1234shivangigupta@gmail.com",
    pass: "fzfq umns eurg xada",
  },
});

// Function to send an email
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: '1234shivangigupta@gmail.com', 
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;
