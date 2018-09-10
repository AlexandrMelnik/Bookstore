import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'your@gmail.com',
    pass: '1234'
  }
});

export function sendConfirmEmail(user) {
  const email = {
    from: "Bookstore",
    to: user.email,
    subject: "Bookstore - confirmation account",
    text: `
      ${user.username} welcome to bookstore. Please, confirm your email.
      ${user.generateUrl}
    `
  }
  transporter.sendMail(email);
}
