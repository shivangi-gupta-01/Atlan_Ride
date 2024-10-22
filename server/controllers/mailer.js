import nodemailer from 'nodemailer';

// Configure the transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // Replace with your SMTP server
  port: 587, // Use the appropriate port
  secure: false, // Set to true if using port 465
  auth: {
    user: "1234shivangigupta@gmail.com",
    pass: "fzfq umns eurg xada",
  },
});

// Function to send an email
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: '1234shivangigupta@gmail.com', // Sender's email
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
