import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'chanelsponky@gmail.com',
    pass: 'activisiongym19977'
  }
});

const from = 'Bookstore <info@bookstore.com>';

export function sendConfirmEmail(user) {
  const email = {
    from,
    to: user.email,
    subject: "Bookstore - confirmation account",
    text: `
      ${user.username} welcome to bookstore. Please, confirm your email.
      ${user.generateUrl}
    `
  }

  transporter.sendMail(email);
}
